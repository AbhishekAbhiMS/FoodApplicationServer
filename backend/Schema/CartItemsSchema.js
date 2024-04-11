const { default: mongoose } = require("mongoose")
const {Schema}=mongoose;

const UserSchema= new Schema({
    userid:{
        type:String,
        require:true
    },
    cartitems:{
        type:Array,
        require:true
    }
})
const Cart=mongoose.model("Cart",UserSchema)
module.exports=Cart;

