const express = require('express')
const router = express.Router();
const controller = require('./controller')


router.post('/signup', controller.createAccount, (req, res) => {
  res.status(200).json(res.locals.account)
})

module.exports = router