const mongoose = require('mongoose');
const { nanoid } = require('nanoid')

const urlSchema = new mongoose.Schema({
    code: {
        type:String,
        default: () => nanoid(10)
    },
    url:{
        type: String,
    },
    shortUrl:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    count:{
        type: Number,
        default:0
    }
    
},)


module.exports = mongoose.model('Url',urlSchema)