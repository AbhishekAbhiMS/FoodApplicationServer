import { connect, useDispatch, useSelector } from "react-redux";
import { bycake } from "../../Redux/Cake/CakeAction";
import Ice from "./Ice"
import LoginAction from "../../Redux/CheckLogin/LoginAction";
import { NavLink } from "react-router-dom";
import boylimg from "../../images/pngegg.png"
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import BasicCard from "../../Components/Card/Card";
import certifid from "../../images/certified.png";
import rocket from "../../images/rocket.png";

import cash from "../../images/cashexchange.png";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import hand from "../../images/hand.png";


const Home = (props) => {
  let loggedin = useSelector(state => state.login.loggedin)
  const dispatch = useDispatch()
  
  return (
    <>
      <div className="hide_scroolbar" style={{ width: '100%', height: '99vh',display:'flex',justifyContent:'center' }}>
        <Box sx={{ flexGrow: 1, paddingTop: '100px', display: 'flex', flexWrap: 'wrap',paddingBottom:'100px',maxWidth:'1400px' }}>
          <Grid container width='50%' className="lefttitel_main"
          // xs={12} md={7} lg={8} 
          >

            <Grid item className="lefttitel_sub" width={'100%'} padding={5}
            //  xs={3} lg={6} 
            //   minWidth='50%'
            >

              <Box
                id="category-a"
                sx={{
                  fontSize: '61px',
                  fontWeight: '600',
                  lineHeight: '73px',
                  marginBottom: '32px'
                }}
              >
                Desire  <button style={{
                  padding: '10px 30px',
                  borderRadius: '54px',
                  border: 'none',
                  transform: 'rotate(-12deg)',
                  fontFamily: 'sans-serif',
                  color: 'white',
                  background: 'linear-gradient(108.71deg, #FF9E0C -0.93%, #D58000 104.81%)',
                  fontSize: '61px',
                  fontWeight: '600',
                  lineHeight: '73px',
                }}>Food</button>
              </Box>
              <Box
                id="category-a"
                sx={{
                  fontSize: '61px',
                  fontWeight: '600',
                  lineHeight: '73px',
                  marginBottom: '32px'

                }}
              >
                for Your Taste
              </Box>
              <Typography sx={{//styleName: Nunit05;
                fontSize: '25px',
                fontWeight: '400',
                lineHeight: '30px',
                textAlign: 'left',
                marginBottom: '32px',
                paddingRight: '30px'

              }}>            Food is what we eat to stay alive and healthy.
                It comes in many different forms and flavors,
                from fruits and vegetables to meats and grains.
              </Typography>
             <NavLink to={loggedin?'/ourmenu':'/singin'}> <Button variant="contained" onClick={()=>{
             }} sx={{
                padding: ' 17px 43px',
                borderRadius: ' 38px',
                bgcolor: 'rgb(174 39 95)',
                fontWeight: '600',
                fontSize: '20px'
              }}>Order now</Button></NavLink>

            </Grid>

          </Grid>
          <Grid container width='50%' className="lefttitel_main" justifyContent={'center'}
          // xs={12} md={7} lg={8} 
          >

            <Grid item className="lefttitel_sub" padding={5}
            >
              <Box position={'relative'} >
                <img src={boylimg} style={{
                  aspectRatio: '3 / 4',
                  maxWidth: '400px',
                  width: '100%',
                  minWidth: '350px'
                }} alt="girl image" />

                <Box className='image_message_style ' position={'absolute'} left={'-100px'} top='132px'
                ><RocketLaunchIcon fontSize="large" style={{ color: 'red', width: '50px', height: '50px' }}></RocketLaunchIcon><div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '22px', fontWeight: '600' }}>Delivery </span><span>in 30 min</span></div></Box>
                <Box className='image_message_style '  width={'250px'}> <Avatar  style={{border:'1px solid #ababab',height:'50px',width:'50px'}} fontSize="large" src={boylimg} /><div style={{ display: 'flex', flexDirection: 'column',alignItems:'center' }}>
                  <span style={{ fontSize: '22px', fontWeight: '600' }}>Abhishek MS </span><span style={{ display: 'flex', alignItems:'center' }} ><StarPurple500SharpIcon style={{ color: '#f1dc04' }}></StarPurple500SharpIcon>4.5&nbsp;&nbsp; <FavoriteSharpIcon fontSize="small" style={{color:'red'}}></FavoriteSharpIcon> 1.5k likes</span></div></Box>

                <Box className='image_message_style ' position={'absolute'} bottom={'150px'} right={'-150px'}  ><LocationOnSharpIcon fontSize="large" style={{ color: 'red', width: '50px', height: '50px' }} /><div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                  <span style={{ fontSize: '22px', fontWeight: '600' }}>Location </span><span>at destination</span></div></Box>



              </Box>

            </Grid>

          </Grid>
          <Grid container width='100%' display={'flex'} className="lefttitel_main" justifyContent={'space-around'} rowGap={2} columnSpacing={3}
          >
            <Grid item xs={3} className="home_card" >

              <BasicCard  img={certifid} name={'Quality Food'} detail={'Contrary to popular belief, Lorem Ipsum is not simply random text'}/>
            </Grid>
            <Grid item xs={3} className="home_card" >
               <BasicCard  img={rocket} name={'Quality Food'} detail={'Contrary to popular belief, Lorem Ipsum is not simply random text'}/>
            </Grid>
            <Grid item xs={3} className="home_card" >
            <BasicCard  img={cash} name={'Quality Food'} detail={'Contrary to popular belief, Lorem Ipsum is not simply random text'}/>
            </Grid>
            <Grid item xs={3} className="home_card" >
            <BasicCard  img={hand} name={'Quality Food'} detail={'Contrary to popular belief, Lorem Ipsum is not simply random text'}/>
            </Grid>
          </Grid>
        </Box>
      </div>

    </>
  );
};

// const mapStateToProps = state=> {
//     return {
//         numOfCake: state.numOfCake
//     };
// };

// const mapDispatchToProps = dispatch=> {
//     return {
//         bycake: () => dispatch(bycake())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
