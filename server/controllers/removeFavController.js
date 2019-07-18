const connectToDb = require('./connectToDb.js');


const removeFavController = (req, res, next) => {
  if (typeof req.body.id !== 'number') return res.status(403).send('id is not a number')
  const pool = connectToDb();

  const query = {
    name: 'Removing from DB',
    text: "DELETE FROM favorites_table WHERE id=$1 RETURNING *;",
    values: [req.body.id]
  };

  pool.query(query, (err, results) => {
    if (err) {
      res.status(403).send(err);
    } else {
      res.locals.removeData = results.rows[0];
      return next();
    }
  })
}


module.exports = removeFavController;