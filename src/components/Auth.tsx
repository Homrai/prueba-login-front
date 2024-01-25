import { auth } from "../types/auth";
import Login from "../views/Login";

const Auth =(Props:auth)=>{
    const {isAllowed,children}=Props;
    if(!isAllowed) return <Login />
    return(
        <>
        {children}
        </>
    )
}
export default Auth;