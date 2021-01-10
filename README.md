# Food-Finder

Tinder like app to find great food and prepare some awesome meals.

npx sequelize-cli model:generate --name "users" --attributes 'username:string, hash:string'

npx sequelize-cli model:generate --name "recipes" --attributes 'title:string, desc:string, preparation:string, category:string, ingredients:string, image:string'

npx sequelize-cli model:generate --name "likes" --attributes 'recipe_id:integer, user_id:integer'
