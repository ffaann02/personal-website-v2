import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography,Box, Menu} from "@mui/material";
import { makeStyles } from '@mui/styles'
import {Link} from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ComputerIcon from '@mui/icons-material/Computer';
import { useNavigate, NavLink } from 'react-router-dom';
import imageSidebarMobile from "..//images/people-group.png"


const useStyles = makeStyles({
    box:{
        background:"linear-gradient(to bottom, #ffffff 0%, #bde6f1 100%)",
        width:"80%",
    },imageSidebarMobile:{
      width:"100%",
      display:"flex"
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
    const [isOpen,setIsOpen] = useState(false)

    const [buttonVisible,setButtonVisible] = useState(false)

    const toggleVisibility = () =>{
        if(window.pageYOffset > 300){
            setButtonVisible(true)
        }
        else{
            setButtonVisible(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility)
        return()=>{
            window.removeEventListener('scroll',toggleVisibility)
        }
    },[])
    return(
        <div>
            <AppBar position="fixed" elevation={0} sx={{backgroundColor:"white", boxShadow:"0 2px 10px rgb(0 0 0 / 0.125)",width:"100%"}}>
            <StyledToolbar sx={{width:{xl:"60%",lg:"70%",md:"90%",sm:"90%",xs:"90%"}}}>
                <Box sx={{display:"flex"}}>
                <Link to="home" smooth duration={1000} offset={-90}>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block",md:"block",lg:"block",xl:"block"},color:"#30475E"
                ,fontWeight:"700",cursor:"pointer",fontSize:{lg:"28px",md:"28px"}}}>
                    FFAANN
                </Typography>
                </Link>
                <Typography variant="h6" sx={{display:{xs:"block",sm:"none",md:"none",lg:"none",xl:"none"},color:"#30475E",fontWeight:"700",cursor:"pointer",fontSize:"28px"}}>
                    <MenuIcon sx={{fontSize:"30px",marginTop:"10px"}} onClick={()=>{setIsOpen(true)}}/>
                </Typography>
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
                    {/*<Link to="blog" smooth duration={1000} offset={-150}>
                    <NavbarButton variant="text">
                            <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>Blog</Typography>
                        </NavbarButton>
    </Link>*/}
                    <Link to="contact" smooth duration={1000} offset={-90}>
                    <NavbarButton variant="text">
                        <Typography sx={{fontSize:"16px", fontWeight:"700", color:"#303960"}}>Contact</Typography>
                        </NavbarButton>
                    </Link>
                        
                        
                </Buttons>
            </StyledToolbar>
            </AppBar>
            <Drawer variant='temporary' open={isOpen} classes={{paper: classes.box}} onBackdropClick={()=>{setIsOpen(false)}}>
            <Link to="home" smooth duration={1000} offset={-90}>
            <Typography variant="h6" sx={{fontSize:"30px",marginLeft:"20px",marginTop:"20px",color:"#03045E",cursor:"pointer"}} onClick={()=>{setIsOpen(false)}}>FFAANN</Typography>
            </Link>
        <List>
          <Link to="home" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-100}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}}>
            <ListItemButton sx={{"&:hover #iconButtonSidebar":{color:"#03045E"}}}>
              <ListItemIcon>
                <HomeIcon id="iconButtonSidebar"/>
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>HOME</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="skills" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={150}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}} >
            <ListItemButton sx={{"&:hover #iconButtonSidebar":{color:"#03045E"}}}>
              <ListItemIcon>
                <WhatshotIcon id="iconButtonSidebar"/>
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>SKILLS</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="projects" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-150}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}}>
            <ListItemButton sx={{"&:hover #iconButtonSidebar":{color:"#03045E"}}}>
              <ListItemIcon>
                <ComputerIcon id="iconButtonSidebar"/>
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>PROJECTS</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="blog" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-100}>
          {/*<ListItem disablePadding sx={{margin:"10px 0 10px 0"}}>
            <ListItemButton sx={{"&:hover #iconButtonSidebar":{color:"#03045E"}}}>
              <ListItemIcon>
                <ArticleIcon id="iconButtonSidebar"/>
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>BLOG</Typography>
            </ListItemButton>
  </ListItem>*/}
          </Link>
          <Link to="contact" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-100}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}}>
            <ListItemButton sx={{"&:hover #iconButtonSidebar":{color:"#03045E"}}}>
              <ListItemIcon>
                <CallIcon id="iconButtonSidebar"/>
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>CONTACT</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
        <Box sx={{position:"absolute",right:"10px",top:"10px"}} onClick={()=>{setIsOpen(false)}}>
            <CloseIcon sx={{fontSize:"30px",color:"red",cursor:'pointer'}}/>
        </Box>
        <Box sx={{width:"100%",position:"absolute",bottom:"0"}}>
        <img  src={imageSidebarMobile} className={classes.imageSidebarMobile} />
                </Box>
        </Drawer>
        </div>
    )
}