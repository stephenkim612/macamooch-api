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
controller.addEvent = (req, res, next) => {
  const info = [req.body.name, req.body.max_capacity, req.body.date, req.body.time, req.body.city]
  const query = 'INSERT INTO events (name, max_capacity, date, time, city) VALUES ($1, $2, $3, $4, $5);'
  db.query(query, info)
    .then(() => {
      return next()
    })
    .catch((err) => {
      return next(err)
    })
}

controller.deleteEvent = (req, res, next) => {
  const name = [req.body.name]
  const query = 'DELETE FROM events WHERE name=$1;'
  db.query(query, name)
    .then(() => {
      return next()
    })
    .catch((err) => {
      return next(err)
    })
}

controller.getAllEvents = (req, res, next) => {
  const query = 'SELECT * FROM events;'
  db.query(query)
    .then((response) =>{
      res.locals.events = response.rows
    })
    .then(() => {
      return next()
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = controller;


