import React, { useState, useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography, Box, Grid } from "@mui/material";
import { useNavigate, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import emoji03 from "..//images/emoji03.png"
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import emoji06 from "..//images/Optimized/emoji06.png"
import profileImage from "..//images/faan-image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
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
        width: "125px",
        border: "2px solid #5DA7DB",
        borderRadius: "10px",
        marginBottom: "10px",
        ['@media (max-width:900px)']: {
            width: "120px",
        },
        ['@media (max-width:600px)']: {
            width: "100px",
        }
    },
    contactThumbnail: {
        width: "100%",
        display: "flex",
        ['@media (max-width:1200px)']: {
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex"
        },
        ['@media (max-width:400px)']: {
            width: "200px",
        },

    },
    socialIcon: {
        fontSize: "40px",
        marginRight: "30px",
        color: "#0096C7",
        cursor: "pointer",
        "&:hover": {
            color: "#205375"
        },
        ['@media (max-width:600px)']: {
            fontSize: "30px",
        },
    },
    profileThumbnail: {
        width: "175px",
        borderRadius: "20px",
        marginTop: "10px",
        position: "absolute",
        bottom: "30px"
    },
    Error404Image:{
        width:"35%",
        ['@media (max-width:900px)']: {
            width: "300px",
        },
    }

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

const BackHomeButton = styled(Button)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "600",
    color: "#023E8A",
    borderRadius: "8px",
    backgroundColor: "#EEF1FF",
    padding: "5px 20px",
    transition: "0.5s",
    "&:hover": {
        padding: "10px 30px",
        backgroundColor: "#B8E8FC"
    },
    ['@media (max-width:600px)']: {
        fontSize: "16px"
    }
}));
const GridImage = styled(Grid)(({ theme }) => ({

}));

export default function Error404() {
    const classes = useStyles();
    const history = useNavigate();
    return (
        <Box className={classes.container} sx={{ width: { xl: "60%", lg: "70%", md: "90%", sm: "90%", xs: "90%" }, marginTop: "40px", height: "100%" }}
            id="error404">
            <Box sx={{ width: "100%", height: "80vh" ,position:"relative"}}>
                <Box sx={{ top:{xl:"5%",lg:"10%",md:"10%",sm:"20%",xs:"15%"},width:"100%",textAlign:"center"}}>
                <img src={emoji06} className={classes.Error404Image}/>
                    <Typography sx={{
                    fontSize: { xl: "2.5vw", lg: "36x", md: "36px", sm: "36px", xs: "30px" },
                    fontWeight: "600", color: "#205375", textAlign: "center"
                }}>Page Not Found</Typography>
                    <Typography sx={{ fontSize: { xl: "1vw", lg: "18px", md: "16px" }, fontWeight: "400", color: "#205375"
                    , lineHeight: "1.75", marginTop: "10px" }}>
                        Uh no, we can't find the page you're looking for. Try going to see home page. If you think this is issue, please contact us.
                    </Typography>
                    <BackHomeButton sx={{marginTop:"10px"}} onClick={()=>{
                    history("/")
                }}>Back to Home</BackHomeButton>
                    </Box>
            </Box>
        </Box>
    )
}