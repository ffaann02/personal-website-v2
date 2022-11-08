import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography,Box, Menu} from "@mui/material";
import { makeStyles } from '@mui/styles'
import {Link} from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <StyledToolbar sx={{width:{xl:"60%",lg:"70%",md:"90%",sm:"90%",xs:"90%"}}}>
                <Box sx={{display:"flex"}}>
                <Link to="home" smooth duration={1000} offset={-90}>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block",md:"block",lg:"block",xl:"block"},color:"#30475E",fontWeight:"700",cursor:"pointer",fontSize:"28px"}}>
                    FFAANN
                </Typography>
                <Typography variant="h6" sx={{display:{xs:"block",sm:"none",md:"none",lg:"none",xl:"none"},color:"#30475E",fontWeight:"700",cursor:"pointer",fontSize:"28px"}}>
                    <MenuIcon sx={{fontSize:"30px",marginTop:"10px"}}/>
                </Typography>
                </Link>
                </Box>
                <Buttons sx={{display:{xs:"none",sm:"block"}}}>
                    <Link to="skills" smooth duration={1000} offset={-100}>
                        <NavbarButton variant="text">
                            <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>Skills</Typography>
                        </NavbarButton>
                    </Link>
                    <Link to="projects" smooth duration={1000} offset={-135}>
                    <NavbarButton variant="text">
                            <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>Projects</Typography>
                        </NavbarButton>
                    </Link>
                    <Link to="contact" smooth duration={1000} offset={-90}>
                    <NavbarButton variant="text">
                        <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>Contact</Typography>
                        </NavbarButton>
                    </Link>
                        
                        
                </Buttons>
            </StyledToolbar>
            </AppBar>
        </div>
    )
}