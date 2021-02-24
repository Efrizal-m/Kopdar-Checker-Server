const Futsal = require('../models/futsal')

class FutsalController {
    static find(req, res, next) {
        Futsal.find()
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
        Futsal.findOne(id)
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

        Futsal.create(payload)
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

        Futsal.update(id, payload)
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
        Futsal.delete(id)
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

module.exports = FutsalController