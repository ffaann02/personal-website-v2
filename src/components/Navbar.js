import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography,Box} from "@mui/material";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    box:{
        background:"linear-gradient(to bottom, #ffffff 0%, #bde6f1 100%)",
        width:"80%",
    },imageSidebarMobile:{
      width:"100%"
    }
})

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
    backgroundColor:"white",
    marginLeft:"auto",
    marginRight:"auto",
    alignSelf:"center"
})

const NavbarButton = styled(Button)(({theme})=>({
    marginLeft:"30px",
    color:"#023E8A",
    borderRadius:"8px",
    "&:hover":{
        backgroundColor:"#EEF1FF"    
    },
}));

const Buttons = styled(Box)(({theme})=> ({
    
}));

export default function Navbar(){
    const classes = useStyles();
    return(
        <div>
            <AppBar position="fixed" elevation={0} sx={{backgroundColor:"white", boxShadow:"0 2px 10px rgb(0 0 0 / 0.125)",width:"100%"}}>
            <StyledToolbar sx={{width:{lg:"60%",md:"90%",sm:"90%",xs:"90%"}}}>
                <Box sx={{display:"flex"}}>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block"},color:"#30475E",fontWeight:"700",cursor:"pointer",fontSize:"28px"}}>
                    FFAANN
                </Typography>
                </Box>
                <Buttons sx={{display:{xs:"none",sm:"block"}}}>
                        <NavbarButton variant="text">
                            <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>SKILLS</Typography>
                        </NavbarButton>
                        <NavbarButton variant="text">
                            <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>Projects</Typography>
                        </NavbarButton>
                        <NavbarButton variant="text">
                        <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>CONTACT</Typography>
                        </NavbarButton>
                </Buttons>
            </StyledToolbar>
            </AppBar>
        </div>
    )
}