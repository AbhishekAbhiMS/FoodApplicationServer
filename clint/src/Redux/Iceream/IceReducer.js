const initialstate={
    numOfIce:20
}

const icereducer=(state=initialstate,action)=>{
    switch (action.type) {
        case 'BUYICE':return{
            ...state,numOfIce:state.numOfIce-1
        }
         
        default:return state
    }

}
export default icereducer