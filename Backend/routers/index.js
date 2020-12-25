const router = require('express').Router()
const Test1Controller = require('../controllers/test1-controller')

router.get('/', Test1Controller.test1)
router.get('/test2', Test1Controller.test2)

module.exports = router