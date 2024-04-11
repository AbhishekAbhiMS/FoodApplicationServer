// const express=require('express')
// const Cart=require("../Schema/CartItemsSchema")
// const Router=express.Router()
// Router.post("/addtocart",async (req,res)=>{
//     let email=req.body.email
//     let items=req.body.cartitems
    
//         let iscart=await Cart.findOne({"userid":email})
        
//         if(iscart==null){
//             try { 
//             Cart.create({
//                 userid:email,
//                 cartitems:items
//     })
//     return res.json({success:true,
//         message:"succesfully added to cart"
// })} catch (error) {
//     res.send({success:false,
//     message:error})

    
// }}
// else{
//     try {
//         Cart.findByIdAndUpdate({"userid":email},
//             {$push:{cartitems:items}}).then(()=>{
//                 res.json({success:true,
//                     message:"succesfully update the cart"})
//             })
//     } catch (error) {
//     res.json({success:false,
//     message:"server error "+error})
//     }
// }

    
// })

// module.exports=Router

const express = require('express');
const Cart = require('../Schema/CartItemsSchema');
const Router = express.Router();

Router.post('/addtocart', async (req, res) => {
  try {
    const email = req.body.userid;
    const items = req.body.cartitems;

    // Check if cart exists for the user
    let cart = await Cart.findOne({ 'userid': email });

    if (cart==null) {
      // Cart doesn't exist, create a new one
      cart = await Cart.create({
        userid: email,
        cartitems: items
      });
      return res.json({
        success: true,
        message: 'Successfully added to cart'
      });
    } else {
      // Cart exists, update it with new items
      await Cart.findByIdAndUpdate(cart._id, { $set: { cartitems: items } });
      return res.json({
        success: true,
        message: 'Successfully updated the cart'
      });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = Router;
