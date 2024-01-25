import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/PasswordTwoTone';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Message, initialMsj, initialUser, userLog } from '../types/login';
import { loginService } from '../api/authApi';
import { NavLink, useNavigate,  } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';
import { addUser } from '../features/userSlice';

const Login =()=>{
    const navigate = useNavigate();
    const dispatch= useAppDispatch();
    const [user,setUser]=useState<userLog>(initialUser);
    const [msj,setMsj]=useState<Message>(initialMsj);
    const [loading,setLoading]=useState<boolean>(false);
    const handleOfChangeUser=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value,name}=e.target;
        setUser((old)=>({...old,[name]:value}));
    }
    const send =async()=>{        
        if(user.user==="" || user.password==="") return setMsj({ok:true,msj:"Porfavor llena todos los campos",color:"red"});
        setMsj({ok:false,msj:"",color:"red"});
        const script = /[<">/']/;
        if(script.test(user.user) || script.test(user.password)) return setMsj({ok:true,msj:`Porfavor no agregue los siguientes caracteres <">/' en ningun campo`,color:"red"});
        setMsj({ok:false,msj:"",color:"red"});
        setLoading(true);
        const res = await loginService(user);
        setLoading(false);
        if(!res.ok) {
            setLoading(false);
            return setMsj({ok:true,msj:res.msj,color:"red"});
        }        
        setMsj({ok:true,msj:res.msj,color:"green"});
        dispatch(addUser(res.data));
        setTimeout(() => {
            navigate("/dashboard");
            setLoading(false);
        }, 2000); 
    }
    return(
        <Box sx={{display:"flex", flexDirection:"column" }}>
                <FormControl sx={{ m: 1, border:1,borderBlockColor:"blueviolet", boxShadow:10, borderRadius:5, padding:4, display:"flex",justifyContent:"space-around",width:300,height:400, alignItems:"center" }} variant="standard">
                <Typography sx={{color:"blueviolet", fontSize:50, fontWeight:500}}>Login</Typography>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField type='text' name='user' value={user?.user} onChange={handleOfChangeUser}  label="User" variant="standard" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField type='password' name='password' value={user?.password} onChange={handleOfChangeUser}  label="Password" variant="standard" />
                    </Box>
                </Box>
                <Typography sx={{display:!msj.ok?"hidden":"", color:msj.color}}>{msj.msj}</Typography>
                <Button disabled={loading} sx={{color:"green"}} onClick={send}> Iniciar sesion</Button>
                </FormControl>
                <NavLink to="/signup" style={{placeSelf:"end", marginRight:50}}>Registrate</NavLink>
            
        </Box>
    )
}
export default Login;