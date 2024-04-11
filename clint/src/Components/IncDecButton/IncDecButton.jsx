import { Button } from "@mui/material"
import { Children } from "react"

  const IncDecButton=(props)=>{
    return(<>
    
    <div>

        <Button onclick={props.incre}>+</Button><span>{props.number}</span><Button onclick={props.decre()}>-</Button>
    </div>
    
    </>)

  }
  export default IncDecButton