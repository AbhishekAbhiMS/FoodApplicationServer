const express=require('express')
const Router=express.Router()

Router.post("/fooddata", (req,res)=>{
try {
    
     res.send({fooditems:global.food_items,
    foodcatagory:global.food_catagory})
} catch (error) {
    res.send({success:false,error:'server error'})
}
   

})
module.exports=Router