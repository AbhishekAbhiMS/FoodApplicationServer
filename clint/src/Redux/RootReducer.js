import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import icereducer from "./Iceream/IceReducer";
import LoginReducer from "./CheckLogin/LoginReducer";
import PriceReducer from "./Cardprice/PriceReducer";

const RootReducer=combineReducers({
    ice:icereducer,
    cake:CakeReducer,
    login:LoginReducer,
    cartitems:PriceReducer
    
})
export default RootReducer