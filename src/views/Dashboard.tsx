import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { removeUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { LocationOn } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const Dashboard =()=>{
    const user=useAppSelector(state=>state.userActive);    
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    const send=()=>{
        dispatch(removeUser());
        navigate("/");
    }
    return(
        <Box sx={{display:"flex", flexDirection:"column", width:500,paddingTop:5, height:900, border:2, borderRadius:5, borderColor:"green", boxShadow:10 }}>
            <Button sx={{color:"green",marginRight:5,placeSelf:"end"}} onClick={send}>Cerrar sesion</Button>
            <Typography sx={{color:"blueviolet", fontSize:40, fontWeight:800}}>Bienvenido</Typography>
            <Box sx={{ p: 2, display: 'flex',mx:"auto", alignItems:"center" }}>
                <Avatar variant="rounded" src="vite.jpg" />
                <Stack spacing={0.5} paddingInline={3}>
                    <Typography textTransform={"capitalize"} alignSelf={"start"} fontWeight="bold">{user.user}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    <LocationOn sx={{color: grey[500]}} /> Scranton, PA, United States
                    </Typography>
                </Stack>
            </Box>
            <Typography sx={{color:"blueviolet", fontSize:20, fontWeight:900}}>{"Descripcion"}</Typography>
            <Box sx={{ p: 2, display: 'flex', alignItems:"center" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad itaque minima, neque necessitatibus voluptatem nemo non quo ratione maxime suscipit aliquid quasi placeat error nulla laborum illum perferendis et saepe eum tenetur voluptate? Cumque, maiores repellendus nobis accusantium fugit ipsa eos quaerat repellat pariatur ullam, unde, eaque nesciunt eligendi! Omnis voluptatum doloribus aspernatur aperiam sequi quidem ad repellat, et magnam, quod, officiis nulla adipisci autem! Sit, consequuntur. Ex eveniet quisquam repudiandae tempore nisi placeat pariatur consequuntur officiis consectetur? Ex aliquam optio nemo modi aut! Illum nulla fuga saepe. Laboriosam nobis quidem modi hic aperiam natus ipsa vero? Possimus, illo! Porro doloribus quidem labore culpa, ipsam esse ad voluptates in corporis architecto tenetur quia veritatis similique quibusdam dolores eveniet sed, explicabo totam. Vel facere accusantium esse temporibus laudantium! Tempore explicabo quis quae nihil asperiores at recusandae laudantium officia repellat voluptatem, non consequatur odit, quos esse! Alias nemo ex dolor accusantium?
            </Box>
        </Box>
    )
}
export default Dashboard;