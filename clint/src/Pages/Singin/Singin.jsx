
// import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { Stack, TextField } from "@mui/material";
// import {  useNavigate } from "react-router-dom";
// import "./Singin.css"
// import LockRoundedIcon from '@mui/icons-material/LockRounded';
// import { useForm } from 'react-hook-form';




// export default function SignIn() {
// let navigate=useNavigate()

// const { register, handleSubmit, watch, formState: { errors } } = useForm()
// const onSubmit = data => console.log(data,"xxx");
// console.log(watch('username'));


//   return (


//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{  
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",

//         }}
//       >
//         <Typography component="div" variant="div" color={'rgb(255 74 0)'} >
//        <div style={{display:'flex',alignItems:'center',marginBottom:'14px'}}> <LockRoundedIcon fontSize="medium"></LockRoundedIcon><span style={{fontSize:'22px !importent'}}>HIGH SECURED LOGIN</span></div>
//         </Typography>
//         <div style={{borderBottom: '2px solid rgb(255 74 0)',width:'66%'}}></div>
//         <Box component="form" id="form" onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1,width: '270px' }}>
//         <Stack sx={{width:'100%',margin:'12px 0px'}}>
//         <div class="input-field">
//         <TextField fullWidth label="username" InputLabelProps={{sx:{color:'#858181',fontSize:'15px'}}} variant="standard"
//         id="username"
//         {...register("username",{
//           required:true
//         })} 
//         type="text"
//         autoComplete="username"
//         autoFocus
//          required/>

//       </div>

//   {errors.username?.type === "required" && <p style={{ marginTop:'-10px', fontSize: "10px", color: 'rgb(207 6 6' }}>{errors.email}</p>
// }
// </Stack>
// <Stack sx={{width:'100%',margin:'12px 0px'}}>
// <div class="input-field">
// <TextField id="password" fullWidth label="password" variant="standard" 


//     name="password"
//     type="password"

//     {...register("password",{
//       required:true,maxLength:4
//     })} 

//      required/>

// </div>
//   {errors.password?.type === "required" && <p style={{ marginTop: '-8px', fontSize: "10px", color: 'rgb(207 6 6' }}>Password is required</p>
// }{errors.mobile?.type === "maxLength" &&<p style={{ marginTop: '-8px', fontSize: "10px", color: 'rgb(207 6 6' }}>Max Length Exceed</p>}
// </Stack>
// {/* <Stack>
// <div class="input-field">
//         <input 
//         className="input"
//     name="password"
//     type="password"
//     id="password"

//      required/>
//   <label>Enter bellow Captca</label>
// </div>
// </Stack> */}
//   {/* <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           /> */}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             className="loginbutton"
//             sx={{ mt: 3, mb: 2,bgcolor:'rgb(255 74 0)' }}
//           >
//             Proceed
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               {/* <NavLink to='/contact'  variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </NavLink> */}
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

































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
import { SinginSchema } from "../Schemas/Singinschema";
// import { SingupSchema } from "../Schemas/Schema";
import { NavLink, useNavigate } from "react-router-dom";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useDispatch, useSelector } from "react-redux";
import LoginAction from "../../Redux/CheckLogin/LoginAction";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

let initialValues = {
  email: "",
  password: ""
}

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const [errortext,seterrortext]=useState('')
  useEffect(()=>{
    setTimeout(()=>{
       setOpen(false)
     },3000) 
     // return clearTimeout(timer)
   },[open])
  let loggedin = useSelector(state => state.login.loggedin)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: SinginSchema,
    onSubmit: async(values, action) => {
      let islogin=await fetch(`https://foodapplicationserver-backend.onrender.com/bachulars/loginuser`,{
        method:'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(values)
      })
let login=await islogin.json()

      if(login.success){
        console.log(values, "aaa");
        localStorage.setItem("login", values.email);
  
        dispatch(LoginAction())
        action.resetForm()
        navigate('/home')
      }else{
        setOpen(true)
        seterrortext(login.message)

      }
      
    }
  })


  return (

    <>
      <div className="signin_main">

        <Typography component="div" variant="div" color={'#ae275f'} >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}> <LockRoundedIcon fontSize="medium"></LockRoundedIcon><span style={{ fontSize: '22px !importent' }}>HIGH SECURED SIGNIN</span></div>
        </Typography>
        <div style={{ borderBottom: '2px solid #ae275f',width:'100%',maxWidth: '352px' }}></div>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width:'100%',maxWidth: '352px' }}>
          <Stack>
            <div className="input-field">
              <input
                className="input"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required />
              <label>Enter your email</label>
            </div>

            {errors.email && touched.email ? (
              <p style={{ marginTop: '-10px', fontSize: "10px", color: 'red' }}>{errors.email}</p>
            ) : null}
          </Stack >
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
                required />
              <label>Enter your password</label>
            </div>
            {errors.password && touched.password ? (
              <p style={{ marginTop: '-8px', fontSize: "10px", color: 'red' }}>{errors.password}</p>
            ) : null}
          </Stack>
          {/* <Stack>
            <div classNames="input-field">
              <input
                className="input"
                name="captcha"
                type="text"
                id="captcha"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required />
              <label>Enter bellow Captca</label>
            </div>
          </Stack> */}
          {values.email && values.password.length >= 6 ? <Button

            type="submit"
            fullWidth
            variant="contained"
            className="loginbutton"
            sx={{ mt: 3, mb: 2, bgcolor: 'rgb(174 39 95)' }}
          >
            Proceed
          </Button> : <Button

            disabled
            fullWidth
            variant="contained"
            className="loginbuttondesable"
            sx={{ mt: 3, mb: 2, bgcolor: 'rgb(174 39 95)' }}
          >
            Proceed
          </Button>}
          <Grid container flexDirection={'column'} rowGap={1}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to='/singup' variant="body2">
                {"Don't have an account? Sign Up"}
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
    </>
  );
}






