import { connect, useDispatch, useSelector } from "react-redux";
import byice from "../../Redux/Iceream/IceAction";

const Home = (props) => {
     let numOfice=useSelector(state=>state.ice.numOfIce)
     const dispatch=useDispatch()
    return (
        <>
            <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1>Sell ice: {numOfice}</h1>
                <br />  
                <button onClick={()=>{
                   dispatch(byice())
                }}>Sellice</button>
            </div>
        </>
    );
};

export default Home;
