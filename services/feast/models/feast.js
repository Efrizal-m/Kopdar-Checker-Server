const db = require('../config/mongo')
const Feast = db.collection('feast')
const { ObjectId } = require("mongodb")


class FeastModel {
    static find(){
        return Feast.find().toArray()
    }

    static findOne(id){
        return Feast.findOne({"_id" : ObjectId(`${id}`)})
    }


    static create(payload){
        return Feast.insertOne(payload)
    }

    static update(id, payload){
        return Feast.findOneAndUpdate({"_id" : ObjectId(`${id}`)}, {$set: { payload }}, {returnOriginal:false} )
    }

    static delete(id){
        return Feast.deleteOne({"_id" : ObjectId(`${id}`)})
    }
}

module.exports = FeastModel