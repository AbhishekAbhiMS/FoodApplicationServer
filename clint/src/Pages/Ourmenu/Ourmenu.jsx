// import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
// import CardList from "../../Components/Card/CardList/CardList"
// import { Button, Input } from "@mui/joy"
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import Draggable from 'react-draggable';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
// import Skeleton from '@mui/material/Skeleton';
// import DropDown from "../../Components/Dropdown/DropDown";
// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Chip from '@mui/joy/Chip';
// import Link from '@mui/joy/Link';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const OurMenu = () => {
//   let [search, setsearch] = useState(null)
//   let [debouncing, setdebouncing] = useState(null)
//   const [alldata, setalldata] = useState()
//   const [loading, setloading] = useState(true)
//   const [foodcatagory, setfoodcatagory] = useState([])
//   const [fooditems, setfooditems] = useState([])



//   let fetchdata = async () => {

//     let fooddata = await fetch("http://localhost:8000/bachulars/fooddata", {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })

//     let datas = await fooddata.json()
//     setalldata(datas)
//     datas.foodcatagory.map(e=>{
//       setfoodcatagory(e.CategoryName)
//      setloading(datas?false:true)
//     })


//   }

//   useEffect(() => {

//     fetchdata()
//   }, [])
//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setdebouncing(search)
//       console.log(search + "debounce");
//     }, 900)

//     return () => { clearTimeout(timer) }
//   }, [search])

//   const sarchfunction = (e) => {
//     setsearch(e.target.value)

//   }
//   return (
//     <>
//       <div className="hide_scroolbar" style={{ width: '100%', height: '99vh' }}>

//         <Box sx={{ flexGrow: 1, paddingTop: '100px', display: 'flex', flexWrap: 'wrap', paddingBottom: '100px' }}>
//           <Grid container width='100%' className="lefttitel_main" textAlign={'center'} style={{ flexDirection: 'column' }}>
//             <Typography variant="h2" style={{ fontWeight: '600' }}>Our best Seller Dishes🔥🔥</Typography>
//             <Typography variant="h6" style={{ fontWeight: '400' }} width={'50%'}>Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</Typography>

//           </Grid>

//           <Draggable><Grid container width='100%' className="search_btn_position"  > <Input onChange={sarchfunction} value={search}
//             startDecorator={<SearchOutlinedIcon />}
//             endDecorator={<Button style={{ background: 'red' }} onClick={() => { setsearch("") }}><CloseRoundedIcon fontSize="large" /></Button>}
//             sx={{
//               'width': '430px',
//               "--Input-radius": "30px",
//               "--Input-gap": "30px",
//               "--Input-placeholderOpacity": 0.5,
//               "--Input-focusedThickness": "1px",
//               "--Input-minHeight": "50px",
//               "--Input-paddingInline": "15px",
//               "--Input-decoratorChildHeight": "33px"
//             }}
//           ></Input></Grid></Draggable>

//           {/* <div style={{display:'flex',alignItems:'center',marginTop:'100px',flexWrap:'wrap',padding:'30px'}}>
//         {alldata&&alldata.fooditems.map((e,i)=>{
//           return <CardList key={i} name={e.name} options={e.options} img={e.img}></CardList>
//         })}
//           </div> */}




//           <CardLoad loading={loading} data={alldata} search={search}></CardLoad>







//         </Box></div>
//     </>
//   )

// }

// function Media(props) {
// "axx".includes('a')
//   return (<>
//   {['Starter','Biryani/Rice','Pizza','Juice'].map((e,i)=>{
//     return (<>
//     <div key={i} style={{width:'100%',padding:'0px 50px',paddingTop:'100px' ,display:'flex',alignItems:'center',justifyContent:'flex-start'}} > <h3>{e}</h3></div>
//     <Grid container wrap="wrap" marginTop={'30px'} display={'flex'} justifyContent={'center'}>
//       {(props.loading ? Array.from(new Array(28)) : props.data.fooditems).map((item, index) => (
//         <>
//        {/* {item.name.includes(props.search)? */}
//          <Card key={index} sx={{ width: 240, maxWidth: '100%', boxShadow: 'lg', margin: '20px', padding: '8px' }}>
//          <CardOverflow>          {item ? (
//            <img
//              style={{ width: '100%', height: 150, margin: '8px 0px', borderRadius: '8px' }}
//              alt={item.title}
//              src={item.img}
//              loading="lazy"
//            />
//          ) : (
//            <Skeleton variant="rectangular" width={'100%'} height={150} />

//          )}

//            {item ? (
//              <Box sx={{ pr: 2 }}>
//                <CardContent>
//                  <Typography level="body-xs">{item.name}</Typography>
//                  <Link
//                    href="#product-card"
//                    fontWeight="md"
//                    color="neutral"
//                    textColor="text.primary"
//                    overlay
//                    endDecorator={<ArrowOutwardIcon />}
//                  >
//                    About {item.name}
//                  </Link>

//                  <Typography
//                    level="title-lg"
//                    sx={{ mt: 1, fontWeight: 'xl' }}
//                    endDecorator={
//                      <Chip component="span" size="sm" variant="soft" color="success">
//                        Lowest price
//                      </Chip>
//                    }
//                  >
//                    2,900 THB
//                  </Typography>
//                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px 0px' }}>                  <DropDown list={item.options}></DropDown> <ShoppingCartIcon></ShoppingCartIcon>
//                  </div>                </CardContent>
//              </Box>
//            ) : (
//              <Box sx={{ pt: 0.5 }}>
//                <Skeleton width={'50%'} />
//                <Skeleton width="100%" />
//                <Skeleton width={'60%'} />
//                <Skeleton width="100%" />
//              </Box>
//            )}
//          </CardOverflow>
//        </Card>:<></>



//         </>
//       ))} 
//     </Grid>
//     </>)
//   })}
//     </>
//   );
// }

// function CardLoad(props) {
//   return (
//     <Box sx={{ overflow: 'hidden', width: '100%' }}>
//       <Media loading={props.loading} data={props.data} search={props.search} />

//     </Box>
//   );
// }
// export default OurMenu 


















import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import { Button, Input } from "@mui/joy"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Draggable from 'react-draggable';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import DropDown from "../../Components/Dropdown/DropDown";
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from "axios"
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import IconButton from '@mui/joy/IconButton';
import CardCover from '@mui/joy/CardCover';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import CreateNewFolder from '@mui/icons-material/CreateNewFolder';
import { useDispatch, useSelector } from "react-redux";
import setcart from "../../Redux/Cardprice/ItemCart";
import { useLocation } from "react-router-dom";
const OurMenu = () => {
  const location=useLocation()
  let [search, setsearch] = useState(location.state==null?"":location.state.data)
  let [debouncing, setdebouncing] = useState('')
  
  const [searchload, setsearchload] = useState(false)
  const [alldata, setAlldata] = useState()
  const [load, setload] = useState(true)
  const [loadingfood, setLoadingFood] = useState(true)
  const [fooitems, setFoodItems] = useState([])
  const [carddetail, setcarddetail] = useState(false)
  const [imgid, setimgid] = useState('');
  const [details,Setdetils]=useState({})
  // const [ItemPrice,SetItemPrice]=useState(0)

// console.log(location,"3456")
const dispatch=useDispatch() 

  const fetchData = () => {
    
    axios.post(`${window.location.origin}/bachulars/fooddata`, {}, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        setAlldata(response.data);
        setFoodItems(response.data?.fooditems);
       
        setsearchload(false)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setsearchload(false)
      });
  };


const updatecart=()=>{
  let initialState;
  axios.post(`${window.location.origin}/bachulars/getcart`, {"userid":localStorage.getItem("login")})
  .then((response) => {
    initialState=response?.data?.message?.cartitems[0]
    console.log(initialState,"get");
let i=0
    const itemList = Object.entries(initialState).map(([itemName, itemDetails]) => {
    
     
i++
console.log(i,'numbers');
            dispatch(setcart(itemName,itemDetails.CategoryName, itemDetails.img,itemDetails.name,itemDetails.qty,parseInt(itemDetails.price),parseInt(itemDetails.number)))
        
      
      })
    }).catch((error)=>{
      console.log(error);
    })

    // dispatch(setcart(Object.keys(initialState)[0],initialState[Object.keys(initialState)[0]].CategoryName, initialState[Object.keys(initialState)[0]].img,initialState[Object.keys(initialState)[0]].name,initialState[Object.keys(initialState)[0]].qty, initialState[Object.keys(initialState)[0]].price,initialState[Object.keys(initialState)[0]].number))


    
 
}



  useEffect(() => {
    updatecart()
    fetchData();
  }, []);



  useEffect(() => {
    // 
    if (loadingfood === false) {

      setload(true)
      console.log(loadingfood, "as");
    }
  }, [loadingfood])

  //debouncing logic
  useEffect(() => {

    let timer = setTimeout(() => {
      setdebouncing(search)
      setsearchload(true)
      console.log(search + "debounce");
    }, 900)

    return () => { clearTimeout(timer) }
  }, [search])


  const sarchfunction = (e) => {
    setsearchload(false)
    setsearch(e.target.value)

  }




 


  return (
    <>
      <div className="hide_scroolbar" style={{ width: '100%', height: '99vh', display: 'flex', justifyContent: 'center' }}>

        <Box sx={{ flexGrow: 1, paddingTop: '100px', display: 'flex', flexWrap: 'wrap', paddingBottom: '200px', maxWidth: '1400px' }}>
          <Grid container width='100%' className="lefttitel_main" textAlign={'center'} style={{ flexDirection: 'column' }}>
            <Typography variant="h2" style={{ fontWeight: '600' }}>Our best Seller Dishes🔥🔥</Typography>
            <Typography variant="h6" style={{ fontWeight: '400' }} width={'50%'}>Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</Typography>

          </Grid>
          
          

          <Draggable><Grid container width='100%' className="search_btn_position"  > <Input onChange={sarchfunction} value={search}
            startDecorator={<SearchOutlinedIcon />}
            endDecorator={<Button style={{ background: 'red' }} onClick={() => {
              setsearchload(false); setsearch("") }}><CloseRoundedIcon fontSize="large" /></Button>}
            sx={{
              'width': '430px',
              "--Input-radius": "30px",
              "--Input-gap": "30px",
              "--Input-placeholderOpacity": 0.5,
              "--Input-focusedThickness": "1px",
              "--Input-minHeight": "50px",
              "--Input-paddingInline": "15px",
              "--Input-decoratorChildHeight": "33px"
            }}
          ></Input></Grid></Draggable>


          <Box sx={{ overflow: 'hidden', width: '100%',paddingBottom:'100px' }}>
            <>
              {['Starter', 'Biryani/Rice', 'Pizza', 'Juice'].map((e, i) => {
                return (<>
                  <div key={i} style={{ width: '100%', padding: '0px 50px',height:'50px', paddingTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} > <h2>{e}</h2></div>
                  <Divider  style={{margin:'20px 40px',border:'1px solid #c7c6c6'}}></Divider>
                  <Grid container wrap="wrap" padding='0px 50px' marginTop={'10px'} display={'flex'} justifyContent={'flex-start'}>
                    {fooitems.filter((itm, i) => {

                      return ((itm?.CategoryName === e) && (itm?.name?.toLowerCase().includes(debouncing.toLowerCase())))
                    }).map((item, index) => {
                   
                      return(

                      <>
                        <Card key={index} sx={{ width: 240, maxWidth: '100%', boxShadow: 'lg', margin: '20px', padding: '8px', paddingBottom: '20px' }} >
                          <CardOverflow>          {searchload ? (
                            <img  onClick={(e) => {
                              console.log(item.name,"sss");
                              setimgid({...imgid,  name: item?.name, img: item?.img, details: item?.description, category: item?.CategoryName })
                              e.stopPropagation();
                              setcarddetail(true)
                            }}
                              style={{ width: '100%', height: 150, margin: '8px 0px', borderRadius: '8px' }}
                              alt={item.title}
                              src={item.img}
                              loading="lazy"
                            />
                          ) : (
                            <Skeleton variant="rectangular" width={'100%'} height={150} />

                          )}
                                
                            { searchload ? (
                              <Box sx={{ pr: 2 ,marginBottom:'22px'}}>
                                <CardContent>
                                  <Typography level="body-xs">{item.name}</Typography>

{/* 
                                  <div  onClick={(e) => {
                                    console.log(item.name,"sss");
                                    setimgid({...imgid,  name: item?.name, img: item?.img, details: item?.description, category: item?.CategoryName })
                                    e.stopPropagation();
                                    setcarddetail(true)
                                  }} id={item.name} ><Link href="#underline" underline="hover">
                                      details <ArrowOutwardIcon />
                                    </Link></div> */}
                                  
                                
                                    <DropDown tocart={item} list={item.options} name={item.name}></DropDown> 
                             </CardContent>
                              </Box>
                            ) : (
                              <Box sx={{ pt: 0.5 }}>
                                <Skeleton width={'50%'} />
                                <Skeleton width="100%" />
                                <Skeleton width={'60%'} />
                                <Skeleton width="100%" />
                              </Box>
                            )}



                          </CardOverflow>
                        </Card>




                       </>
                    ) })}
                  </Grid>
                </>)
              })}
            </>
          </Box>
        </Box>

        {(carddetail ) && <div  id="cardouter" style={{ backgroundColor: '#0606063b', height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
                          if (e.target.id == 'cardouter') {
                            setcarddetail(!carddetail)
                          }
                        }} >
                          <div id="inner" style={{
                            backgroundColor: '#fffdfd', padding: '22px',borderRadius:'10px',
                            boxShadow:'0px -1px 65px black'
                          }}>

<Card
      variant="plain"
      sx={{
        width: 400,
        height:500,
        bgcolor: 'initial',
        p: 0,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              src={imgid.img}
              loading="lazy"
              alt={imgid.name}
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            opacity: 0,
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <div>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexGrow: 1,
                alignSelf: 'flex-end',
              }}
            >
              <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href="#dribbble-shot"
                  overlay
                  underline="none"
                  sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                >
                  {imgid.name}
                </Link>
              </Typography>
              <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                <ShoppingCartIcon></ShoppingCartIcon>
              </IconButton>
              <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
              >
                <Favorite />
              </IconButton>
            </Box>
          </div>
        </CardCover>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
       
        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
          {imgid.category}
        </Typography>
        <Chip
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{
            borderRadius: 'sm',
            py: 0.25,
            px: 0.5,
          }}
        >
          Featured
        </Chip>
        <Link
          href="#dribbble-shot"
          level="body-xs"
          underline="none"
          startDecorator={<Favorite />}
          sx={{
            fontWeight: 'md',
            ml: 'auto',
            color: 'text.secondary',
            '&:hover': { color: 'danger.plainColor' },
          }}
        >
          {parseInt(Math.random()*(1000-100)+100)}
        </Link>
        <Link
          href="#dribbble-shot"
          level="body-xs"
          underline="none"
          startDecorator={<Visibility />}
          sx={{
            fontWeight: 'md',
            color: 'text.secondary',
            '&:hover': { color: 'primary.plainColor' },
          }}
        >
          
          {Number(Math.random()*(100-10)+10).toFixed(1)}K
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>

        {imgid.details}
      </Box>
    </Card>


                          </div>

                        </div>}
      </div>
    </>
  )

}



export default OurMenu 
