import axios from "axios";

// const callfun=async(values, action) => {
//     let isdata=await fetch('http://localhost:8000/bachulars/getcart',{
//       method:'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body:{"userid":localStorage.getItem("login")}
//     })
// let data=await isdata.json()
//     if(data.success){
//      console.log(data.message.cartitems[0],"kk")
//     }else{
//         console.log(data.message);

//     }
    
//   }

let initialState={}
 

  // axios.post('http://localhost:8000/bachulars/getcart', {"userid":localStorage.getItem("login")})
  // .then((response) => {
  //   initialState=response?.data?.message?.cartitems[0]


  //   console.log(initialState,"get");

    
  // }, (error) => {
  //   console.log(error);
  // });


  // callfun()




 const  PriceReducer=(State=initialState,action)=>{
  // axios.post('http://localhost:8000/bachulars/getcart', {"userid":localStorage.getItem("login")})
  // .then((response) => {
  //   State=response?.data?.message?.cartitems[0]
  //   console.log(State,"get");

    
  // }, (error) => {
  //   console.log(error);
  // });
    switch (action.type) {
        case 'ADDTOCART':
            return {...State,
                [action.id]:{
                    CategoryName:action.CategoryName,
                    img:action.img,
                    name:action.name,
                    qty: action.qty,
                    price:action.price,
                    number:action.number
                         }}
        default:return State
         
    }
}
export default PriceReducer