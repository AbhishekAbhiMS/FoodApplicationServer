
const express = require('express');
const Cart = require('../Schema/CartItemsSchema');
const Router = express.Router();
console.log("erfghj")
Router.post('/getcart', async (req, res) => {
  try {
    const email = req.body.userid;
   
    let cart = await Cart.findOne({ 'userid': email });

    if (cart===null) {
  
      return res.json({
        success: true,
        message: 'cart is empty'
      });

      

    } else {
     
      return res.json({
        success: true,
        message:cart
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
