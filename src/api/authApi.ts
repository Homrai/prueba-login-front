import axios from "axios";
import { userLog } from "../types/login";
const url = "https://prueba-login-server.vercel.app";
const header = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
export const loginService= async (data:userLog)=>{
  try {
        const res = await axios.post(url+"/login",data,header);
        if(res.status!==200) return {ok:false,msj:res.data.error};
        if(res.data.error) return {ok:false,msj:res.data.error};
        return {ok:true,msj:res.data.res,data:res.data.data};        
    } catch (error) {
        console.log(error);
        return {ok:false,msj:"ups! problemas con el acceso del servidor, intentelo mas tarde"};        
    }
}

export const signUpService= async (data:userLog)=>{
  try {
    const res = await axios.post(url+"/signup",data,header);
    if(res.status!==201) return {ok:false,msj:res.data.error};
    if(res.data.error) return {ok:false,msj:res.data.error};
    return {ok:true,msj:res.data.res,data:res.data.dataUser};        
} catch (error) {
    console.log(error);
    return {ok:false,msj:"ups! problemas con el acceso del servidor, intentelo mas tarde"};        
} 
}