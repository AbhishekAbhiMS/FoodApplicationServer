const iniState={
    loggedin:!!localStorage.getItem("login")
}

const LoginReducer=(State=iniState,action)=>{
    switch (action.type) {
        case 'LOGING':return{ 
            ...State,loggedin:!!localStorage.getItem("login")
        }
         default:return State
    }
}
export default LoginReducer