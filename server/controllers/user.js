const connectToDb = require('./connectToDb.js');

const login = (req, res, next) => {
  const pool = connectToDb();
  const query = {
    name: "Login",
    text: 'SELECT id, username, email FROM user_table WHERE username=$1 AND password=$2',
    values: [req.body.username, req.body.password]
    }

  pool.query(query, (err, result) => {
    if (err) {
        return res.status(403).send(err.toString());
    } else {
        res.locals.result = result.rows[0];
        return next();
    }
  })
}

const signup = (req, res, next) => {
  const pool = connectToDb();
  const query = {
    name: "Signup",
    text: 'INSERT INTO user_table(username, password, email) VALUES($1, $2, $3) RETURNING id, username, email',
    values: [req.body.username, req.body.password, req.body.email]
  }

  pool.query(query, (err, result) => {
    if (err) {
        return res.status(403).send(err.toString());
    } else {
        res.locals.result = result.rows[0];
        return next();
    }
  })
}

module.exports = { login, signup }