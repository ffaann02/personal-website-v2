import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography,Box, Grid} from "@mui/material";
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import emoji03 from "..//images/Optimized/emoji05.png"
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import emoji01 from "..//images/emoji01.png"

import "./heroblockStyle.css"
import {Link} from "react-scroll"
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    heroblockImage:{
        width:"450px",
        height:"100%",
        marginTop:"40px",
        marginLeft:"auto",
        marginRight:"auto",
        ['@media (max-width:1536px)']:{
            width:"400px",
        },
        ['@media (max-width:1200px)']:{
            width:"450px"
        },
        ['@media (max-width:900px)']:{
            width:"350px",
            marginTop:"100px",
            marginRight:"10px",
        }
        
    },
    heroBlockIcon:{
        width:"7.5vw",
        opacity:"50%"
    },
    heroblockImage02:{
        width:"370px",
        height:"50%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"40px",
        display:"flex",
        justifySelf:"center",
        ['@media (max-width:400px)']:{
            width:"290px",
            height:"43%",
        }
    }
    
    
})

const HeroblockButton = styled(Button)(({theme})=>({
    color:"#023E8A",
    borderRadius:"8px",
    border:"1px solid #25316D",
    "&:hover":{
        backgroundColor:"#EEF1FF"
    },
}));

export default function HeroBlock(){
    function OpenGithub(){
        window.open("https://github.com/ffaann02");
    }
    function OpenResume(){
        window.open("https://drive.google.com/drive/folders/18xfcJvIk5UJIPGbyvOlHfSINXgJ6e9A-?usp=sharing");
    }
    const classes = useStyles();
    document.addEventListener("mousemove", parallax);
    function parallax(e){
        this.querySelectorAll('#layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX*speed)/100;
            const y = (window.innerWidth - e.pageY*speed)/100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }
    return(
        <Box sx={{width:"100%",position:"relative"}} id="home">
<Grid container className={classes.container} sx={{
            width: { xl:"60%",lg: "70%", md: "90%", sm: "90%", xs: "90%" },height:{xl:"60vh",lg:"57vh",md:"60vh",sm:"100%",xs:"100%"}
            ,marginTop: { lg: "50px", md: "40px", sm: "10px", xs: "10px"}}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{textAlign:"center",position:"relative"}}>
            <Box sx={{ display: "flex", marginLeft: "auto", marginRight: "auto"
            ,alignSelf: "center", width: { xl:"100%",lg: "100%", md: "100%", sm: "100%", xs: "100%" },position:"absolute"
            ,display:{xl:"flex",lg:"flex",md:"flex",sm:"flex",xs:"none"}}}>
                <img src={emoji03} className={classes.heroblockImage}/>
            </Box>
            <Grid container sx={{width:"100%",height:"100%",marginTop:"20px",position:{xl:"absolute",lg:"absolute",md:"absolute"
            ,sm:"",xs:""},zIndex:"3",display:"flex"}}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{textAlign:"left"}}>
                    <Box sx={{marginTop:{xl:"100px",lg:"100px",md:"100px",sm:"50px",xs:"50px"}}} id="layer" data-speed="-1">
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:{xl:"2vw",lg:"30px",md:"30px"}}}>Hi 👋, I'm</Typography>
                    <Typography sx={{ fontWeight: "600" ,color:"#205375",fontSize:{xl:"3.7vw",lg:"50px",md:"50px",sm:"50px",xs:"50px"}}}>RUDFAAN</Typography>
                    <Typography sx={{ fontWeight: "600" ,color:"#205375",fontSize:{xl:"3.7vw",lg:"50px",md:"50px",sm:"50px",xs:"50px"}}}>MAIMAHAD</Typography>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:{xl:"1vw",lg:"16px",md:"16px",sm:"16px",xs:"16px"}}}>Computer Engineering Student</Typography>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",display:"flex"}}> 
                    <Typography  sx={{fontWeight: "600" ,color:"#205375",fontSize:{xl:"1vw",lg:"26px",md:"26px",sm:"26px",xs:"26px"}}}>at </Typography>
                    <Typography  sx={{fontWeight: "600", color:"#F66B0E",marginLeft:"10px",fontSize:{xl:"1.5vw",lg:"30px",md:"30px",sm:"30px",xs:"30px"}}}>KMUTT</Typography>
                    </Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{textAlign:{xl:"right",lg:"right",md:"right",sm:"left",xs:"left"}}}>
                    <Box sx={{marginTop:{xl:"175px",lg:"175px",md:"175px",sm:"20px",xs:"20px"}}} id="layer" data-speed="1">
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:{xl:"2vw",lg:"30px",md:"30px"}}}>Interested in </Typography>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:{xl:"1.5vw",lg:"24px",md:"24px"}}}>Software Development</Typography>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:{xl:"1.5vw",lg:"24px",md:"24px"}}}>Sports & Speaking</Typography>
                    <Box sx={{width:"100%"}}>
                    <HeroblockButton sx={{marginTop:"10px"}}>
                        <GitHubIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A"}} onClick={OpenGithub}>Github</Typography>
                    </HeroblockButton>
                    <HeroblockButton sx={{marginLeft:"10px",marginTop:"10px"}}>
                        <ArticleIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A" }} onClick={OpenResume}>Portfolio</Typography>
                    </HeroblockButton>
                    </Box>
                    <Link to="contact" smooth duration={1000} offset={-90}>
                    <HeroblockButton sx={{marginLeft:"10px",marginTop:"10px",marginLeft:"0"}}>
                        <PhoneIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A"}}>CONTACT ME</Typography>
                    </HeroblockButton>
                    </Link>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{textAlign:"center",width:"100%",height:"100%"
                ,display:{xl:"none",lg:"none",md:"none",sm:"none",xs:"block"}}}>
                    <img src={emoji03} className={classes.heroblockImage02}/>
                </Grid>
            </Grid>

                {/*<
                <Box sx={{width:"100%",marginTop:"10px"}}>
                    <HeroblockButton >
                        <GitHubIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A"}}>Github</Typography>
                    </HeroblockButton>
                    <HeroblockButton sx={{marginLeft:"10px"}}>
                        <ArticleIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A"}}>RESUME</Typography>
                    </HeroblockButton>
        </Box>*/}
            </Grid>
        </Grid>
        <Box sx={{width:"100%",height:"100%",position:"absolute",zIndex:"-3",height:"100%",top:"0"}}>
            <Box className="box"></Box>
            <Box className="box"></Box>
            <Box className="box"></Box>
            <Box className="box"></Box>
            <Box className="box"></Box>
            <Box className="box"></Box>
        </Box>
        </Box>
        
    )
}