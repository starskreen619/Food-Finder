require('dotenv').config()

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const es6Renderer = require('express-es6-template-engine');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const {requireLogin} = require('./auth')
const homeController = require('./controllers/home');
const userRouter = require('./routers/user');

const app = express();
const server = http.createServer(app);

const PORT = 5000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(logger);

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.get('/', homeController.home);

app.use('/users', userRouter);

app.get('/members-only', requireLogin, (req, res) => {
    console.log(req.session.user);
    const { username } = req.session.user;
    res.send(`

<h1>Hi ${username}!</h1>
<br>
<a href="/users/logout">Log out</a>
    `);
});

app.get('/unauthorized', (req, res) => {
    res.send(`Whoops! Looks like you need to 
            <br>
            <a href="/users/new">Sign up</a>
            <br>
            Or
            <a href="/users/login">Log in</a>`)
})

server.listen(PORT, HOST, () => {
    console.log(`Listening at port ${PORT}`)
})