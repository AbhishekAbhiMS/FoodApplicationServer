const { default: mongoose } = require("mongoose")
const {Schema}=mongoose;

const UserSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    }
})
const User=mongoose.model("Users",UserSchema)
module.exports=User;

