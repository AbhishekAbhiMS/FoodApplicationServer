
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { Stack } from "@mui/material";
// import { SinginSchema } from "../Schemas/Singinschema";
import { SingupSchema } from "../Schemas/Schema";
import { NavLink, useNavigate } from "react-router-dom";
// import "./Singiup.css"
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

let initialValues={
    name:null,
  email:null,
  password:null,
  conform_password:null
}

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const [errortext,seterrortext]=useState('')
 let timer=useEffect(()=>{
 setTimeout(()=>{
    setOpen(false)
  },3000) 
  return clearTimeout(timer)
},[open])
let navigate=useNavigate()
  let {values,errors,handleBlur,handleChange,handleSubmit,touched }=useFormik({
    initialValues: initialValues,
        validationSchema:SingupSchema,
    onSubmit:async(values,action)=>{
       console.log(values,"aaa");
       
     let responce=await fetch(`${window.location.origin}/bachulars/createuser`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(values)
     })
     let resjson=await responce.json()
     if(resjson.success){
     action.resetForm()
     navigate('/singin')}else{
      setOpen(true)
      seterrortext(resjson.error)
     }
    
    }
  })
 

  return (

    
    <div className="signin_main">
        <Typography component="div" variant="div" color={'#ae275f'} >
        <div style={{display:'flex',alignItems:'center',marginBottom:'14px'}}> <LockRoundedIcon fontSize="medium"></LockRoundedIcon><span style={{fontSize:'22px !importent'}}>HIGH SECURED SINGUP</span></div>
        </Typography>
        <div style={{ borderBottom: '2px solid #ae275f',width:'100%',maxWidth: '352px' }}></div>
        <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 ,width:'100%',maxWidth: '352px'}}>
        <Stack>
        <div className="input-field">
        <input 
        className="input"
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        autoFocus
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
         required/>
        <label>Enter your name</label>
      </div>
       
  {errors.name && touched.name ? (
    <p style={{ marginTop:'-10px', fontSize: "10px", color: 'red' }}>{errors.name}</p>
  ) : null}
</Stack>
<Stack>
        <div className="input-field">
        <input 
        className="input"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
         required/>
        <label>Enter your email</label>
      </div>
       
  {errors.email && touched.email ? (
    <p style={{ marginTop:'-10px', fontSize: "10px", color: 'red' }}>{errors.email}</p>
  ) : null}
</Stack>
<Stack>
<div className="input-field">
        <input 
        className="input"
    name="password"
    type="password"
    id="password"
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
     required/>
  <label>Enter your password</label>
</div>
  {errors.password && touched.password ? (
    <p style={{ marginTop: '-8px', fontSize: "10px", color: 'red' }}>{errors.password}</p>
  ) : null}
</Stack>
<Stack>
<div className="input-field">
        <input 
        className="input"
    name="conform_password"
    type="password"
    id="conform_password"
    value={values.conform_password}
    onChange={handleChange}
    onBlur={handleBlur}
     required/>
  <label>Re-enter your password</label>
</div>
  {errors.conform_password && touched.conform_password ? (
    <p style={{ marginTop: '-8px', fontSize: "10px", color: 'red' }}>{errors.conform_password}</p>
  ) : null}
</Stack> {values.conform_password!=null&&values.email!=null&&values.password==values.conform_password?<Button
          
            type="submit"
            fullWidth
            variant="contained"
            className="loginbutton"
            sx={{ mt: 3, mb: 2,bgcolor:'rgb(174 39 95)' }}
          >
            Proceed
          </Button>:<Button
          
          disabled
          fullWidth
          variant="contained"
          className="loginbuttondesable"
          sx={{ mt: 3, mb: 2,bgcolor:'rgb(174 39 95)' }}
        >
          Proceed
        </Button>}
          <Grid container>
            
            <Grid item>
              <NavLink to='/singin'  variant="body2">
                {" have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{position: 'fixed',
  inset: 0,
  width: 'fit-content',
  height: 'fit-content',
  margin: 'auto' }}>
      <Collapse in={open}>
        <Alert 
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }} severity="warning" color="warning"
        >
{errortext}        </Alert>
      </Collapse>
      
    </Box>
     </div>
  );
}







