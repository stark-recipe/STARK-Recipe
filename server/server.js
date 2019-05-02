const searchController = require('./controllers/searchController');
const addFavController = require('./controllers/addFavController');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const removeFavController = require('./controllers/removeFavController')
const removeList = require('./controllers/removeList')
const mainShoppingList = require('./controllers/mainShoppingList')
const favorite = require('./controllers/favorite')
const user = require('./controllers/user')

const {
  PORT = 3000
} = process.env;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  return next();
});

//sends back id, username, email
app.post('/signup', user.signup, (req, res) => {
  res.send(res.locals.result);
})

app.post('/login', user.login, (req, res) => {
  res.send(res.locals.result);
})

app.post('/search', searchController, (req, res) => {
  if (res.locals.err) res.status(404).send(err);
  res.send(res.locals.apiData);
});

//sends back user_id, label, img_url, recipe_url
app.post('/addFav', addFavController, (req, res) => {
  console.log('added to db');
  res.send(res.locals.addFav);
});

//sends back id, label, img_url, recipe_url, user_id
app.delete('/removeFav', removeFavController, (req, res)=> {
  res.send(res.locals.removeData);
});

app.get('/favorite/:user_id', favorite, (req, res) => {
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.get('/mainShoppingList', mainShoppingList, (req, res) => {
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.post('/addIngredientsToList', (req, res) => {
  res.send(res.locals.addIngredientsToList);
});

app.delete('/removeList', removeList, (req, res) => {
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send('Booby Drop Tables');
})

app.get('*', (req, res) => {
  res.status(404).send('Route does not exist');
})

// if (require.main === module) {
//   app.listen(PORT, () => {
//     console.log('server started at http://localhost:' + PORT);
//   });
// };

module.exports =  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
  });
