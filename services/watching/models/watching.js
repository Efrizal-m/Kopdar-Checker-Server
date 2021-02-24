const db = require('../config/mongo')
const Futsal = db.collection('watching')
const { ObjectId } = require("mongodb")


class FutsalModel {
    static find(){
        return Futsal.find().toArray()
    }

    static findOne(id){
        return Futsal.findOne({"_id" : ObjectId(`${id}`)})
    }


    static create(payload){
        return Futsal.insertOne(payload)
    }

    static update(id, payload){
        return Futsal.findOneAndUpdate({"_id" : ObjectId(`${id}`)}, {$set: { payload }}, {returnOriginal:false} )
    }

    static delete(id){
        return Futsal.deleteOne({"_id" : ObjectId(`${id}`)})
    }
}

module.exports = FutsalModel