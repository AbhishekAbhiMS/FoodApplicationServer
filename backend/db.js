const mongoose=require("mongoose")
 
let items , catagory,cartitem;
const mongodb=()=>{
    mongoose.connect('mongodb+srv://abhishekms:abhishekmschotta%40gmail.com@abhi.ntriwye.mongodb.net/fooddata?retryWrites=true&w=majority&appName=abhi')
    .then(async()=>{
        console.log("data base connected sucessfully");
       const fletchingitem= mongoose.connection.db.collection("fooditems")
       items=await fletchingitem.find({}).toArray()
       const fletchingcatagory= mongoose.connection.db.collection("foodcatagory")
       catagory=await fletchingcatagory.find({}).toArray()
       const fletchingcartitem= mongoose.connection.db.collection("foodcatagory")
       cartitem=await fletchingcartitem.find({}).toArray()
       global.food_items=items;
       global.food_catagory=catagory
       global.cart_item=cartitem 
    })
    .catch(erroe=>{
        console.log("fail to connect",erroe);
    })
   
}
module.exports=mongodb