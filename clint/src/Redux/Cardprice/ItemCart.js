 const setcart=(id,CategoryName,img,name,qty,price,number)=>{
    return{
      type:"ADDTOCART",
      id:id,
      CategoryName: CategoryName,
      img: img,
      name: name,
      qty: qty,
      price: price, 
      number:number
    }
   }   
 
 export default setcart