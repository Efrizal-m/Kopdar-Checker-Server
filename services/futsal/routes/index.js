const router = require('express').Router()
const FutsalController = require('../controllers/futsalController')

router.get('/futsal', FutsalController.find)
router.post('/futsal', FutsalController.create)
router.get('/futsal/:id', FutsalController.findOne)
router.put('/futsal/:id', FutsalController.update)
router.delete('/futsal/:id', FutsalController.delete)

module.exports = router