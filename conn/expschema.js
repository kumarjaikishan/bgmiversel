const mongo = require('mongoose');

const tourna = new mongo.Schema({
    torunaname:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    stat:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})
const model = new mongo.model("Tournament",tourna);
module.exports=model;