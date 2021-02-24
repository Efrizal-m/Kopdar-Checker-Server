const router = require('express').Router()
const WatchingController = require('../controllers/watchingController')

router.get('/watching', WatchingController.find)
router.post('/watching', WatchingController.create)
router.get('/watching/:id', WatchingController.findOne)
router.put('/watching/:id', WatchingController.update)
router.delete('/watching/:id', WatchingController.delete)

module.exports = router