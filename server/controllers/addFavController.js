const connectToDb = require('./connectToDb');

const addFavController = (req, res, next) => {
  const pool = connectToDb();
  const user_id = req.body.user_id;
  const label = req.body.label;
  const img_url = req.body.img_url;
  const recipe_url = req.body.recipe_url;

  const query = {
    name: 'Add Favorite To DB',
    text: 'INSERT INTO favorites_table(user_id, label, img_url, recipe_url) VALUES($1, $2, $3, $4) RETURNING *;',
    values: [user_id, label, img_url, recipe_url]
  }

  pool.query(query, (err, result) => {
    if (err) {
      res.status(403).send(err);
    } else {
      res.locals.addFav = result.rows[0];
      return next();
    }
  })
}

module.exports = addFavController;