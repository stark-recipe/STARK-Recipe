const connectToDb = require('./connectToDb.js');

const removeList = (req, res, next) => {
  const pool = connectToDb();
  const query = {
    name: 'Remove Ingredients from Shopping List',
    text: 'DELETE FROM "shopinglist_table"'
  }

  pool.query(query, (err, results) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.locals.data = "Bobby Drop Tables";
      return next();
    }
  });
}

module.exports = removeList;