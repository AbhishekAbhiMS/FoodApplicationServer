import { Box, Button, Divider, Grid } from "@mui/material"
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, useNavigate } from 'react-router-dom';

const Cart=()=>{
    const navigate=useNavigate()
    return(
       
      <div className="hide_scroolbar" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        

      <Box className="cart_main_list" sx={{ paddingTop: '100px', display: 'flex',width:'100%',  maxWidth: '1400px' }}>

      <Grid className="cart_main_listsub" container width='55%'   style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <div style={{width:'100%',position:'sticky',top:'0px'}}> <div style={{display:'flex',alignItems:'center'}}><ArrowBackIosIcon onClick={()=>{
        navigate("-1")
    }} style={{margin:'0px 10px'}}/>Cart List</div> <Divider  style={{margin:'30px 10px',border:'1px solid gray'}}></Divider></div>
     <div className="scrolldiv" style={{display:'flex',flexDirection:'column',alignItems:'center',height:'70vh',overflow:'scroll'}} > {[1,2,3,4,5,6,7,8].map((e,i)=><Card orientation="horizontal" variant="outlined" sx={{ width: 430,margin:'22px',boxShadow:'0px 0px 20px darkgray' }}>
      <CardOverflow >
        <AspectRatio ratio="1" sx={{ width: 100,height:'100%',padding:'10px' }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          Yosemite Park
        </Typography>
        <Typography level="body-sm">California, USA</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          justifyContent: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        Ticket
      </CardOverflow>
    </Card>)}</div>


          </Grid>

          <Grid className="cart_main_listsub" container width='45%'   style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px'}}>
    








     <div className="scrolldiv"  style={{display:'flex',flexDirection:'column',alignItems:'center',overflow:'scroll',width:'650px',height:'80vh'}} >
     <article className="card">
	<div className="container">
		<div className="card-title">
			<h2>Payment</h2>
		</div>
		<div className="card-body">
			<div className="payment-type">
				<h4>Choose payment method below</h4>
				<div className="types flex justify-space-between">
					<div className="type selected">
						<div className="logo">
							<i className="far fa-credit-card"></i>
						</div>
						<div className="text">
							<p className=".p">Pay with Credit Card</p>
						</div>
					</div>
					<div className="type">
						<div className="logo">
							<i className="fab fa-paypal"></i>
						</div>
						<div className="text">
							<p className=".p">Pay with PayPal</p>
						</div>
					</div>
					<div className="type">
						<div className="logo">
							<i className="fab fa-amazon"></i>
						</div>
						<div className="text">
							<p className=".p">Pay with Amazon</p>
						</div>
					</div>
				</div>
			</div>
			<div className="payment-info flex justify-space-between">
				<div className="column billing">
					<div className="title">
						<div className="num">1</div>
						<h4>Billing Info</h4>
					</div>
					<div className="field full">
						<label className="PAYlabel" for="name">Full Name</label>
						<input id="name" type="text" placeholder="Full Name"/>
					</div>
					<div className="field full">
						<label className="PAYlabel" for="address">Billing Address</label>
						<input id="address" type="text" placeholder="Billing Address"/>
					</div>
					<div className="flex justify-space-between">
						<div className="field half">
							<label className="PAYlabel" for="city">City</label>
							<input id="city" type="text" placeholder="City"/>
						</div>
						<div className="field half">
							<label className="PAYlabel" for="state">State</label>
							<input id="state" type="text" placeholder="State"/>
						</div>
					</div>
					<div className="field full">
						<label className="PAYlabel" for="zip">Zip</label>
						<input id="zip" type="text" placeholder="Zip"/>
					</div>
				</div>
				<div className="column shipping">
					<div className="title">
						<div className="num">2</div>
						<h4>Credit Card Info</h4>
					</div>
					<div className="field full">
						<label className="PAYlabel" for="name">Cardholder Name</label>
						<input id="name" type="text" placeholder="Full Name"/>
					</div>
					<div className="field full">
						<label className="PAYlabel" for="address">Card Number</label>
						<input id="address" type="text" placeholder="1234-5678-9012-3456"/>
					</div>
					<div className="flex justify-space-between">
						<div className="field half">
							<label className="PAYlabel" for="city">Exp. Month</label>
							<input id="city" type="text" placeholder="12"/>
						</div>
						<div className="field half">
							<label className="PAYlabel" for="state">Exp. Year</label>
							<input id="state" type="text" placeholder="19"/>
						</div>
					</div>
					<div className="field full">
						<label className="PAYlabel" for="zip">CVC Number</label>
						<input id="zip" type="text" placeholder="468"/>
					</div>
				</div>
			</div>
		</div>
		<div className="card-actions flex justify-space-between">
			<div className="flex-start">
				<NavLink to={"/home"}><button className="button button-secondary">Return to Home</button></NavLink>
			</div>
			<div className="flex-end">
				<Button className="button button-primary">Proceed</Button>
			</div>
		</div>
	</div>
</article>

         </div>


          </Grid>











      </Box>
        </div>
    )
}
export default Cart