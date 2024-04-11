import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';




export default function BasicCard(Props) {
  return (
    <Card sx={{ width:300,height:330,backgroundColor:'#f6f6f6' }} >
      <CardContent sx={{textAlign:'center',gap:'12px'}} >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <img src={Props.img} alt="card image" height={'100px'} width={'100px'} />
        </Typography>
        <Typography variant="h5" component="div" fontSize={'30px'} fontWeight={600}>
        {Props.name}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" fontSize={'20px'} lineHeight={'24px'}>
       {Props.detail}</Typography>
        <Typography variant="body2">
         <Link style={{textDecoration:'none', fontSize:'18px',color:'rgb(174 39 95)'}} > Learn more</Link>
         
        </Typography>
      </CardContent>
      
    </Card>
  )
}
