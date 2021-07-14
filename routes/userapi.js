var express = require('express')

var router = express.Router()

var controller = require('../controller/users.controller.js')

router.get('/', controller.index)

router.get('/create', controller.create)

router.post('/create', controller.postCreate)

router.get('/search', controller.search)

router.get('/:id', controller.getByID)

module.exports = router;
