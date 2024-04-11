const initialState={
    numOfCake:10
}
 const CakeReducer=(State=initialState,action)=>{
    switch (action.type) {
        case 'BUYCAKE':return{ 
            ...State,numOfCake:State.numOfCake-1
        }
        default:return State
         
    }
}
export default CakeReducer