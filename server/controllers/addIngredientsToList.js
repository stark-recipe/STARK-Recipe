const connectToDb = require('./connectToDb');

const addIngredientsToList = (req, res, next) => {
  const pool = connectToDb();
  const ingredients = req.body.ingredients;

  const query = {
    name: 'Add Ingredients to Shopping List',
    text: 'INSERT INTO shopinglist_table(item) VALUES($1) RETURNING *',
    values: [ingredients]
  }

  pool.query(query, (err, result) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.locals.addIngredientsToList = result;
      return next();
    }
  })
}

module.exports = addIngredientsToList;