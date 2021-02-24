const router = require('express').Router()
const FeastController = require('../controllers/feastController')

router.get('/feast', FeastController.find)
router.post('/feast', FeastController.create)
router.get('/feast/:id', FeastController.findOne)
router.put('/feast/:id', FeastController.update)
router.delete('/feast/:id', FeastController.delete)

module.exports = router