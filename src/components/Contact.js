import React, { useState, useEffect } from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography, Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import emoji03 from "..//images/emoji03.png"
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import emoji04 from "..//images/emoji04.png"
import profileImage from "..//images/faan-image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faMediumM} from '@fortawesome/free-brands-svg-icons'
import Aos from "aos";
import "aos/dist/aos.css"
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    heroblockImage: {
        width: "45vh",
        height: "100%",
        marginTop: "40px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    underLine: {
        width: "8vw",
        border: "2px solid #5DA7DB",
        borderRadius: "10px",
        marginBottom: "10px"
    },
    contactThumbnail: {
        width: "100%",
    },
    socialIcon: {
        fontSize: "40px",
        marginRight: "30px",
        color: "#0096C7",
        cursor: "pointer",
        "&:hover": {
            color: "#205375"
        },
    },
    profileThumbnail: {
        width: "175px",
        borderRadius:"20px",
        marginTop:"10px",
        position:"absolute",
        bottom:"30px"
    },
    
})

const KeywordButton = styled(Button)(({ theme }) => ({
    color: "white",
    fontWeight: "600",
    backgroundColor: "#5DA7DB",
    borderRadius: "8px",
    border: "1px solid #25316D",
    "&:hover": {
        backgroundColor: "#5DA7DB",
    },
}));

const GridImage = styled(Grid)(({ theme }) => ({
    
}));

export default function Contact() {
    const classes = useStyles();
    useEffect(()=>{
        Aos.init({ duration:1500});
    },[]);
    return (
        <Box className={classes.container} sx={{ width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" }, marginTop: "20px" }} id="contact" data-aos="fade-up">
            <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontSize: "2.5vw", marginTop: "40px", fontWeight: "600", color: "#205375", textAlign: "center" }}>Get In Touch</Typography>
                <hr className={classes.underLine} />
                <Grid container sx={{ width: "100%", marginTop: "20px" ,borderRadius:"20px"
                ,boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",padding:"20px 20px 0 20px",border:"1px solid rgba(99, 99, 99, 0.2)"}}>
                    <Grid item lg={7} sx={{padding:"10px",position:"relative"}}>
                        <Typography sx={{ fontSize: "1.75vw", fontWeight: "600", color: "#205375" }}></Typography>
                        <Typography sx={{ fontSize: "1.5vw", marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: "1.5vw", marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Email:
                            </Typography>
                            <Typography sx={{ fontSize: "1.5vw", marginTop: "5px", display: "flex", marginLeft: "10px" }}>
                                rudfaanmaimahad@gmail.com
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: "1.5vw", marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: "1.5vw", marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Social Media:
                            </Typography>
                            
                        </Typography>
            
                        <Box sx={{width:"100%",marginTop:"10px"}}>
                            <a><FontAwesomeIcon icon={faFacebook} className={classes.socialIcon}/></a>
                            <a><FontAwesomeIcon icon={faInstagram} className={classes.socialIcon}/></a>
                            <a><FontAwesomeIcon icon={faLinkedin} className={classes.socialIcon}/></a>
                            <a><FontAwesomeIcon icon={faMediumM} className={classes.socialIcon}/></a>
                        </Box>
                        <Typography sx={{ fontSize: "1.5vw", marginTop: "10px", display: "flex" }}>
                            <Typography sx={{ fontSize: "1.75vw", marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Thank you for Visiting My Website 
                            </Typography>
                        </Typography>
                            <Box>
                            <img src={profileImage} className={classes.profileThumbnail} />
                            </Box>
                    </Grid>
                    <GridImage item lg={5}>
                        <img src={emoji04} className={classes.contactThumbnail} />
                    </GridImage>
                </Grid>
            </Box>
        </Box>
    )
}