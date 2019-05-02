const connectToDb = require('./connectToDb.js');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const login = (req, res, next) => {
  if (!req.body.username || !req.body.password) return res.status(403).send('Error - no username/password')
  const pool = connectToDb();
  const query = {
    name: "Login",
    text: 'SELECT password, id, username, email FROM user_table WHERE username=$1',
    values: [req.body.username]
  }

  pool.query(query, (err, result) => {
    if (err) {
        return res.status(403).send(err.toString());
    } else {
        bcrypt.compare(req.body.password, result.rows[0].password, (err, isMatch) => {
            if (err || !isMatch) {res.status(403).send('password is invalid')}
            else {
              res.locals.result = {username: result.rows[0].username, email: result.rows[0].email, id: result.rows[0].id}
              return next();
            } 
        })
    }
  })
}


//hashes password before signup
const signup = (req, res, next) => {
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {if(err) {return next(err)};
    bcrypt.hash(req.body.password, salt, function(err, hash){
      if(err) {return next(err)}
      else {
        const pool = connectToDb();
        const query = {
          name: "Signup",
          text: 'INSERT INTO user_table(username, password, email) VALUES($1, $2, $3) RETURNING id, username, email',
          values: [req.body.username, hash, req.body.email]
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
    })
  })
   



}

module.exports = { login, signup }