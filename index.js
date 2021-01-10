require("dotenv").config();

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const es6Renderer = require("express-es6-template-engine");
// need to npm i express-session session-file-store
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const { requireLogin } = require("./auth");
const homeController = require("./controllers/homecontroller");
const userRouter = require("./routers/userrouter");

const app = express();
app.use(session({ secret: "somevalue" })); //added this line to avoid the "Error: secret option required for sessions"

const server = http.createServer(app);

const PORT = 5000;
const HOST = "0.0.0.0";

const logger = morgan("tiny");

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(
  session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    rolling: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(logger);
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", homeController.home);

app.use("/users", userRouter);

app.get("/members-only", requireLogin, (req, res) => {
  console.log(req.session.user);
  const { username } = req.session.user;
  res.send(`
<h1>Hi ${username}!</h1>
<br>
<a href="/users/logout">Log out</a>
`);
});

app.get("/unauthorized", (req, res) => {
  res.send(`Whoops! Looks like you need to 
            <br>
            <a href="/users/new">Sign up</a>
            <br>
            Or
            <a href="/users/login">Log in</a>`);
});

server.listen(PORT, HOST, () => {
  console.log(`Listening at port ${PORT}`);
});
