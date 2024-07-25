const mongoose = require("mongoose")

const feedBack = new mongoose.Schema({
    gmail :{
        tyep:String 
    }, 
    Feedback :{
        type : String,
    },
    Stars :{
        type : Number,
        required : true,
    },
    issus :{
        type : String
    }
})
module.exports = mongoose.model("FeedBack",feedBack)
