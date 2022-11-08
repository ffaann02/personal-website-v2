import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography,Box, Grid} from "@mui/material";
import { makeStyles } from '@mui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faMediumM} from '@fortawesome/free-brands-svg-icons'
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    socialIconFooter: {
        fontSize: "20px",
        marginRight: "20px",
        color: "#0096C7",
        cursor: "pointer",
        "&:hover": {
            color: "#205375"
        },
    },
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

export default function Footer(){
    function OpenFacebook(){
        window.open("https://www.facebook.com/rudfanmaimahad/");
    }
    function OpenInstagram(){
        window.open("https://www.instagram.com/ffaann.mmh/?hl=en");
    }
    function OpenLinkedIn(){
        window.open("");
    }
    function OpenMedium(){
        window.open("https://medium.com/@ffaann");
    }
    const classes = useStyles();
    return(
        <Box sx={{width:"100%",marginTop:"20px"}}>
            <Grid container className={classes.container} sx={{
                        width: { xl:"60%",lg: "70%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center",
                    }}>
                        <Grid item lg={12} md={12} sm={12} xs={12}sx={{padding:"0 0 10px 0"}}>
                            <Typography sx={{fontSize:{xl:"1vw",lg:"1vw",md:"20px",sm:"20px",xs:"16px"}}}>© 2022, Rudfaan Maimahad.</Typography>
                            <Typography sx={{fontSize:{xl:"1vw",lg:"1vw",md:"20px",sm:"20px",xs:"16px"}}}>Built with React & Material UI v5</Typography>
                            <Box sx={{width:"100%",marginTop:"5px",textAlign:"center",marginLeft:"10px"}}>
                            <FontAwesomeIcon icon={faFacebook} className={classes.socialIconFooter} onClick={OpenFacebook}/>
                         <FontAwesomeIcon icon={faInstagram} className={classes.socialIconFooter} onClick={OpenInstagram}/>
                          <FontAwesomeIcon icon={faLinkedin} className={classes.socialIconFooter} onClick={OpenLinkedIn} />
                          <FontAwesomeIcon icon={faMediumM} className={classes.socialIconFooter} onClick={OpenMedium}/>
                        </Box>
                        </Grid>
                </Grid>
        </Box>


    )
}