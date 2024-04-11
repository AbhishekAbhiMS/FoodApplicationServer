const express=require('express')
const User=require("../Schema/UserSchema")
const Router=express.Router()
Router.post("/createuser",async (req,res)=>{
    let email=req.body.email

    try {
        let islogin=await User.findOne({email})
        if(!islogin){
        User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phonenumber:req.body.phonenumber
    })
    return res.json({success:true,
        message:"ok"
})}
else{
    return res.status(400).send({success:false,error:'user already exist'})
}

    } catch (error) {
        res.send({success:false,
        message:error})

        
    }
})

Router.post("/loginuser",async (req,res)=>{
    let email=req.body.email
    try {
    let islogin=await User.findOne({email})
   if(!islogin){
   return res.status(400).send({success:false,message:'you dont have an account'})}
   if(islogin.password!=req.body.password){
    return res.status(400).send({success:false,
    message:"incorrect possward"})
   }
        return res.send({success:true,
        message:'login successfully'})
    } catch (error) {
       return res.send({success:false,
        message:error})

        
    }
})
module.exports=Router