const db = require('./db')

const controller = {}

controller.setHeader = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next()
}

controller.getNewAccount = (req, res, next) => {
  const credentials = [req.body.name, req.body.email, req.body.password];
  const query = 'SELECT * FROM users WHERE name=$1 and email=$2 and password=$3 LIMIT 1;'
  db.query(query, credentials)
    .then((response) => {
      res.locals.account = response.rows;
      console.log('line 15', response)
    })
    .then(() => {return next()})
}

controller.createAccount = (req, res, next) => {
  const credentials = [req.body.name, req.body.email, req.body.password];
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);'
  console.log('line 24', credentials)
  db.query(query, credentials)
    .then(() => {return next()})
    .catch((err) => {
      return next(err)
    })
}

module.exports = controller;


