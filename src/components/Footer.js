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
    const classes = useStyles();
    return(
        <Box sx={{width:"100%",marginTop:"20px"}}>
            <Grid container className={classes.container} sx={{
                        width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center",
                    }}>
                        <Grid item lg={12} sx={{padding:"0 0 10px 0"}}>
                            <Typography sx={{fontSize:"1vw"}}>© 2022, Rudfaan Maimahad.</Typography>
                            <Typography sx={{fontSize:"1vw"}}>Built with React & Material UI v5</Typography>
                            <Box sx={{width:"100%",marginTop:"5px"}}>
                            <a><FontAwesomeIcon icon={faFacebook} className={classes.socialIconFooter}/></a>
                            <a><FontAwesomeIcon icon={faInstagram} className={classes.socialIconFooter}/></a>
                            <a><FontAwesomeIcon icon={faLinkedin} className={classes.socialIconFooter}/></a>
                            <a><FontAwesomeIcon icon={faMediumM} className={classes.socialIconFooter}/></a>
                        </Box>
                        </Grid>
                </Grid>
        </Box>


    )
}