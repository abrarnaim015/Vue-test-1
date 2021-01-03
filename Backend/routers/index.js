const router = require('express').Router()
const Test1Controller = require('../controllers/test1-controller')

router.get('/', Test1Controller.test1)
router.get('/:id', Test1Controller.getById)

module.exports = router