const express = require('express')
const router = express.Router();
const controller = require('./controller')


router.post('/signup', controller.setHeader, controller.createAccount, controller.getNewAccount, (req, res) => {
  res.status(200).json({response: res.locals.account})
})

module.exports = router