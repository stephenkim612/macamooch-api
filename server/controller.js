const db = require('./db')

const controller = {}

controller.createAccount = (req, res, next) => {
  const credentials = [req.body.name, req.body.email, req.body.password];
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);'
  db.query(query, credentials)
    .then((response) => {      
      const getUser = 'SELECT * FROM users WHERE name=$1 and email=$2 and password=$3 LIMIT 1;'
      db.query(getUser, credentials)
      .then((response) => {
        res.locals.account = response.rows
      })
      .then(() => {
        console.log(res.locals.account)
      })      
      return next()
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = controller;


