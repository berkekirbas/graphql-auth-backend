const { Router } = require('express')

const router = Router()

/* Controllers */
const indexController = require('../controller/indexController')

/* Routes */
router.get('/', indexController)

module.exports = router
