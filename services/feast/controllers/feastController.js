const Feast = require('../models/feast')

class FeastController {
    static find(req, res, next) {
        Feast.find()
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
        Feast.findOne(id)
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
        const { field, address, location, date, time } = req.body
        const payload = { field, address, location, date, time }

        Feast.create(payload)
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

        Feast.update(id, payload)
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
        Feast.delete(id)
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

module.exports = FeastController