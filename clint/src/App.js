import './App.css';
import Headder from './Pages/Headder/Headder';
import Home from './Pages/Home/Home';
import Signup from './Pages/Singup/Singup';
import SignIn from './Pages/Singin/Singin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import "./Pages/Common.css"
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from './Pages/Footer/Footer';
import Orders from './Pages/Orders/Orders';
import OurMenu from './Pages/Ourmenu/Ourmenu';
import Cart from './Pages/Cart/Cart';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contactus from './Pages/Contactus/Contactus';
function App() {
  let loggedin=useSelector(state=>state.login.loggedin)
  const [islogin,setislogin]=useState(!!localStorage.getItem('login'))
  console.log(localStorage.getItem('login'),'qq');
  useEffect(()=>{
    setislogin(loggedin)
  },[loggedin])
  return (
    
    <Router>
      <Headder />
      <Routes>
      
      <Route exact path="/"  element={<Home></Home>} />
        <Route  path='/home' element={<Home></Home>}/>
        <Route path="/singin" element={<SignIn />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />



      </Routes>
     <Footer></Footer>
    </Router>
    
       
       
       

  );
}

export default App;
