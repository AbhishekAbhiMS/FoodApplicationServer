import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { Chip, Typography } from '@mui/joy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Link } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import axios from 'axios';
import setcart from '../../Redux/Cardprice/ItemCart';
import { NavLink } from 'react-router-dom';
const DropDown = (props) => {
    let quantity = useSelector(state => state.cartitems)

    let dispatch = useDispatch()


    
 const [cartapi,setcartapi]=useState(0)
    const [datakey, setdatakey] = React.useState([])
    const [num, setNum] = React.useState(1)
    const [qty, setQty] = React.useState(quantity[props.name]?quantity[props.name].qty:Object.keys(props.list[0])[0]);
    const [itemnum, setItemnum] = React.useState(quantity[props.name]?parseInt(quantity[props.name].number):1)
    const [cartclicked, setcartclicked] = React.useState(false)
    const [pluse, setpluse] = useState(false)
    const [minus, setminus] = useState(false)
    const [cartdata,setCartdata]=useState(quantity)

    // const callfun=async(values, action) => {
    //     let isdata=await fetch('http://localhost:8000/bachulars/getcart',{
    //       method:'POST',
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body:{"userid":localStorage.getItem("login")}
    //     })
    // data=await isdata.json()
    //     if(data.success){
    //      console.log(data.message.cartitems[0],"kk")
    //     }else{
    //         console.log(data.message);
    
    //     }
        
    //   }

    React.useEffect(
        () => {
            if(quantity[props.name]){
                setcartclicked(true)
            }
            // callfun()
            setdatakey(Object.keys(props.list[0]))
            // setQty(Object.keys(props.list[0])[0])

        }, []
    )

   
   
    const handleChange = (event) => {
        setcartclicked(false)
        setQty(event.target.value);


    };

   
      
    
    React.useEffect(()=>{
        if(cartapi>0){
            console.log(quantity,"abhi");
            axios.post("http://localhost:8000/bachulars/addtocart", {
                    userid: localStorage.getItem("login"), 
                    cartitems:quantity
        
                }
                )
        }

        // console.log(quantity[props.name].name,"ms");

    },[cartapi])
    const handelcart = () => {
        setcartapi(p=>p+1)
         setcartclicked(true)
         let id = props.tocart.name

         dispatch(setcart(id, props.tocart.CategoryName, props.tocart.img,props.tocart.name,qty, parseInt(props.list[0][qty] *  itemnum),itemnum))


        //  console.log(cartdata,'abhi');
        //  console.log("abhi");
           
        
        // axios.post("localhost:8000/bachulars/addtocart", {
        //     userid: localStorage.getItem("login"), 

        //     cartitems:{
        //         id: { 
        //             'CategoryName': props.tocart.CategoryName,
        //             'img': props.tocart.img,
        //             'name': props.tocart.name,
        //             'type': qty,
        //             "price": parseInt(props.list[0][qty] * num * itemnum)
        //         }

        //     }

        // }
        // )
    }

    return (
        <FormControl variant="standard" sx={{}}>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}> <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: 'xl', minWidth: '60px' }} >
                    
                    {props.list[0][qty] * itemnum} ₹
                </Typography><div style={{ marginRight: '20px' }}> <Button onClick={() => {
                    if (itemnum > 1) {
                        setpluse(false)
                        setminus(true)
                        setcartclicked(false)
                        setItemnum(p => p - 1)
                    }
                }} style={{ padding: '0px', minWidth: '45px' }}><RemoveIcon style={{ color: minus ? "green" : 'red' }} /></Button>{itemnum}<Button onClick={() => {
                    setcartclicked(false)
                    setminus(false)
                    setpluse(true)
                    setItemnum(p => p + 1)
                }} style={{ padding: '0px', minWidth: '45px' }}><AddIcon style={{ color: pluse ? "green" : 'red' }} /></Button></div></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Select sx={{ width: '85px' }}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={qty}
                        onChange={handleChange}
                        label="Age"
                    >
                        {datakey?.map((e, i) => {
                            return (<MenuItem key={i} value={e}>{e}</MenuItem>)
                        })}

                    </Select>{!cartclicked?<ShoppingCartIcon disabled={true}  style={{ color:cartclicked ? "rgb(174 39 95)" : "black" ,cursor:'pointer'}}  onClick={handelcart} ></ShoppingCartIcon> :<NavLink to={'/cart'} ><Button style={{fontSize:'12px',backgroundColor:'rgb(174 39 95)',color:'white', fontWeight:500}}>go TO CART</Button></NavLink>}</div>
            </div>
        </FormControl>
    )
}
export default DropDown