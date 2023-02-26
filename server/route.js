const express = require('express')
const router = express.Router();
const controller = require('./controller')


router.post('/signup', controller.setHeader, controller.createAccount, controller.getNewAccount, (req, res) => {
  res.status(200).json({response: res.locals.account})
})

router.post('/addEvent', controller.addEvent, (req, res) => {
  res.status(200).json({status: 'successfully added'})
})

router.post('/deleteEvent', controller.deleteEvent, (req, res) => {
  res.status(200).json({status: "successfully deleted"})
})

router.get('/getAllEvents', controller.getAllEvents, (req, res) => {
  res.status(200).json({response: res.locals.events})
})

module.exports = router