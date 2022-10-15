import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography,Box, Grid} from "@mui/material";
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import heroblockImage from "..//images/faan-image.png"
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import emoji01 from "..//images/emoji01.png"
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    heroblockImage:{
        width:"55vh",
        height:"100%",
        marginTop:"40px",
        marginLeft:"auto",
        marginRight:"auto"
    },
    
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
    const classes = useStyles();
    return(
        <Grid container className={classes.container} sx={{
            width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" },height:"55vh"
            ,marginTop: { lg: "40px", md: "40px", sm: "10px", xs: "10px"}}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{textAlign:"center",position:"relative"}}>
            <Box sx={{ display: "flex", marginLeft: "auto", marginRight: "auto"
            ,alignSelf: "center", width: { lg: "100%", md: "400px", sm: "400px", xs: "300px" },position:"absolute"}}>
                <img src={heroblockImage} className={classes.heroblockImage}/>
            </Box>
            <Grid container sx={{width:"100%",height:"100%",marginTop:"20px",position:"absolute"}}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{textAlign:"left",height:"100%"}}>
                    <Box sx={{marginTop:"25%"}}>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:"2vw"}}>Hi 👋, I'm</Typography>
                    <Typography sx={{ fontWeight: "600" ,color:"#205375",fontSize:"4vw"}}>RUDFAAN</Typography>
                    <Typography sx={{ fontWeight: "600" ,color:"#205375",fontSize:"4vw"}}>MAIMAHAD</Typography>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:"1vw"}}>Computer Engineering Student</Typography>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",display:"flex"}}> 
                    <Typography  sx={{fontWeight: "600" ,color:"#205375",fontSize:"1vw"}}>at </Typography>
                    <Typography  sx={{fontWeight: "600", color:"#F66B0E",marginLeft:"10px",fontSize:"1.5vw"}}>KMUTT</Typography>
                    </Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{textAlign:"right",height:"100%"}}>
                    <Box sx={{marginTop:"40%"}}>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:"2vw"}}>Interested in </Typography>
                    <Typography  sx={{ fontWeight: "600" ,color:"#205375",fontSize:"1.5vw"}}>Website & Mobile Application Development</Typography>
                    <Box sx={{width:"100%"}}>
                    <HeroblockButton sx={{marginTop:"10px"}}>
                        <GitHubIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A"}}>Github</Typography>
                    </HeroblockButton>
                    <HeroblockButton sx={{marginLeft:"10px",marginTop:"10px"}}>
                        <ArticleIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A"}}>RESUME</Typography>
                    </HeroblockButton>
                    </Box>
                    <HeroblockButton sx={{marginLeft:"10px",marginTop:"10px"}}>
                        <PhoneIcon sx={{marginRight:"5px", color :"#277BC0"}}/>
                            <Typography sx={{fontSize:"16px",marginTop:"2px",fontWeight:"600",color:"#023E8A"}}>CONTACT ME</Typography>
                    </HeroblockButton>
                    </Box>
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
    )
}