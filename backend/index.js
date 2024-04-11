const express = require("express");
const cors=require('cors')
const app = express();

// ro handel cors error 
app.use(cors())

app.use(express.json());
// MongoDB connection
const db=require("./db")
db()


// endpoint = /bachulars/createuser  to create user

app.use('/bachulars',require('./Router/CreateUser'))

// endpoint = /bachulars/fooddata  to give data from backend

app.use('/bachulars',require('./Router/FoodData'))

// endpoint /bachulars/addtocart to save cart items
app.use('/bachulars',require("./Router/AddToCart"))

// endpoint /bachulars/getcart to save cart items
app.use('/bachulars',require("./Router/GetCart"))



app.get('/', (req, res) => {
  res.send("hi abhishek ms");
});


app.listen(8000, () => {
  console.log("Server running on port 8000");
});
