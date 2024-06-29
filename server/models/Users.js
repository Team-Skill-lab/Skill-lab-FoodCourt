const mongoose = require('mongoose')

const student = new mongoose.Schema({

    name :{
        type : String,
        require: true,
    },
    USN :{
        type:String,
        unique : true,
    },
    email:{
        type : String,
        require:true
    },
    mobile :{
        type:Number,
        require:true
    },

})
const teacher = new mongoose.Schema({

    name :{
        type : String,
        require: true,
    },
    email:{
        type : String,
        require:true
    },
    mobile :{
        type:Number,
        require:true
    },
    department:{
        type:String,
        },
        Orders: [
            {
                orderName: { type: String, required: true },
                payment: { type: Number, required: true  },
                status: { type: String , required: true },
            }
        ]  
}
)
const FoodDetails = new mongoose.Schema({
    name :{
        type : String,
        require:true
        },
        price :{
            type : Number,
            require: true,
            },
            image :{
                type : String,
                require: true,
                }
                }
               
)

const Student = mongoose.model('Student', student);
const Teacher = mongoose.model('Teacher', teacher);
const Food = mongoose.model('Food', FoodDetails);


module.exports = { Student, Teacher, Food };