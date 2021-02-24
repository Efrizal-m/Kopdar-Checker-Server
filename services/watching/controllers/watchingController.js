const Watching = require('../models/watching')

class WatchingController {
    static find(req, res, next) {
        Watching.find()
        .then(result => {
            res.status(200)
            res.send(result)
        })
        .catch(error => {
            res.status(500)
            res.send({message:'Internal Server Error'})
        })
    }
    
    static findOne(req, res, next) {
        const { id } = req.params
        Watching.findOne(id)
        .then(result => {
            res.status(200)
            res.send(result)
        })
        .catch(error => {
            res.status(500)
            res.send({message:'Internal Server Error'})
        })
    }

    static create(req, res, next) {
        const { cinema, address, location, date, time } = req.body
        const payload = { cinema, address, location, date, time }

        Watching.create(payload)
        .then(result => {
            res.status(201)
            res.send(result.ops[0])
        })
        .catch(error => {
            res.status(500)
            res.send({message:'Internal Server Error'})
        })
    }

    static update(req, res, next) {
        const { id } = req.params
        const { field, address, location, date, time } = req.body
        const payload = { field, address, location, date, time }

        Watching.update(id, payload)
        .then(result => {
            res.status(200)
            res.send(result.value)
        })
        .catch(error => {
            res.status(500)
            res.send({message:'Internal Server Error'})
        })
    }

    static delete(req, res, next) {
        const { id } = req.params
        Watching.delete(id)
        .then(result => {
            res.status(200)
            res.send({_id:id, message:'succes to delete'})
        })
        .catch(error => {
            res.status(500)
            res.send({message:'Internal Server Error'})
        })
    }

}

module.exports = WatchingController