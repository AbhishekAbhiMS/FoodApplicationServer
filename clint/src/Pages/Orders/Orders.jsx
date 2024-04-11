import { useEffect, useState } from "react"

const Orders=()=>{
    
let [normal,setnornal]=useState('')
let [debouncing,setdebouncing]=useState(0)
let [throtaling,setthrotling]=useState(0)
let [ti,settimer]=useState(0)



let a=[1,2,[2,345,[2,[[1,3,[4,[5,[5]]]],[2]]]],543]

let aa=[]
let flaten=(arr)=>{
   arr.forEach(element => {
    console.log(element);
     if(Array.isArray(element)){
             return flaten(element)
            }
    aa.push(element)
   });
   return aa
}

console.log(flaten(a));
  
useEffect(()=>{
   let n=new Date().getTime()
   if(n-ti>800){

   
    console.log(ti,"k",n);
    settimer(n)
    setthrotling(p=>p+1)
   }

let timer=setTimeout(()=>{
    setdebouncing(p=>p+1)
},900)

return ()=>{clearTimeout(timer)}

},[normal])
    return(
        <div style={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',
        flexDirection:'column'}}>
          <input type="text" value={normal} onChange={(e)=>{
            setnornal(e.target.value)
          }}/>
<div>normal clicked called{normal}</div><br /><br />
<div>debouncing clicked called{debouncing}</div><br /><br />
<div>throtaling clicked called{throtaling}</div>


<button onClick={()=>{
setnornal(p=>p+1)

}}>click
    </button>        </div>
    )
}
export default Orders