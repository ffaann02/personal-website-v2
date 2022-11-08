import React, { useState, useEffect } from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography, Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import emoji03 from "..//images/emoji03.png"
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import award01 from "..//images/Optimized/fibo.jpeg"
import award02 from "..//images/Optimized/jstp-min.png"
import award03 from "..//images/Optimized/nsc-min.png"

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
        width:"200px",
        border:"2px solid #5DA7DB",
        borderRadius:"10px",
        marginBottom:"10px",
        ['@media (max-width:900px)']:{
            width:"150px",
        },
        ['@media (max-width:600px)']:{
            width:"120px",
        }
    },
    experienceThumbnail: {
        width: "100%",
        borderRadius: "10px"
    }
})

const ReadmoreButton = styled(Button)(({theme})=>({
    fontSize:"20px",
    fontWeight:"600",
    marginLeft:"30px",
    color:"#023E8A",
    borderRadius:"8px",
    backgroundColor:"#EEF1FF",
    padding:"10px 20px",
    transition:"0.5s",
    "&:hover":{
        padding:"10px 30px" ,
        backgroundColor:"#B8E8FC"
    },
    ['@media (max-width:600px)']:{
        fontSize:"16px"
    }
}));


const GridImage = styled(Grid)(({ theme }) => ({
    
}));

export default function Project() {


    useEffect(()=>{
        Aos.init({ duration:1500});
    },[]);
    const classes = useStyles();
    return (
        <Box className={classes.container} sx={{ width: { xl:"60%",lg: "70%", md: "90%", sm: "90%", xs: "90%" }, marginTop: "20px" }} id="projects" data-aos="fade-up">
            <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontSize:{xl:"2.5vw",lg:"36x",md:"36px",sm:"30px",xs:"24px"}, marginTop: "10px", fontWeight: "600", color: "#205375", textAlign: "center" }}>Projects & Experience</Typography>
                <hr className={classes.underLine} />
                <Grid container sx={{ width: "100%", marginTop: "20px" }}>
                    <GridImage item lg={5} md={5} sm={12} xs={12} sx={{ padding: "10px" }}>
                        <img src={award01} className={classes.experienceThumbnail} />
                    </GridImage>
                    <Grid item lg={7} md={7} sm={12} xs={12}sx={{ padding: "10px" }}>
                        <Typography sx={{ fontSize: {xl:"1.75vw",lg:"1.75vw",md:"24px",sm:"24px",xs:"20px"}, fontWeight: "600", color: "#205375" }}>1st Prize Winner in Metaverse for Smart Factory Contest 2022 by Microsoft</Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Project:
                            </Typography>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", marginLeft: "10px" }}>
                                Natural Latex Pillow Factory based on Digital Twins in Metaverse
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"20px"}, marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Role:
                            </Typography>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", marginLeft: "10px" }}>
                                3D and VR Developer
                            </Typography>
                        </Typography>

                    </Grid>
                    <GridImage item lg={5} md={5} sx={{ padding: "10px" }}>
                        <img src={award02} className={classes.experienceThumbnail} />
                    </GridImage>
                    <Grid item lg={7} md={7} sx={{ padding: "10px" }}>
                        <Typography sx={{ fontSize: {xl:"1.75vw",lg:"1.75vw",md:"24px",sm:"24px",xs:"20px"}, fontWeight: "600", color: "#205375" }}>Junior Science Talent Project 24th (JSTP24) by NSTDA</Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Project:
                            </Typography>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", marginLeft: "10px" }}>
                                Pill Detection using Convolution Neural Networks
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Description:
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex" }}>
                            A Science project in computer field. It was developed for detecting pills, which use for help people with visual disability
                        </Typography>
                    </Grid>
                    <GridImage item lg={5} md={5} sx={{ padding: "10px" }}>
                        <img src={award03} className={classes.experienceThumbnail} />
                    </GridImage>
                    <Grid item lg={7} md={7} sx={{ padding: "10px" }}>
                        <Typography sx={{ fontSize:{xl:"1.75vw",lg:"1.75vw",md:"24px",sm:"24px",xs:"20px"}, fontWeight: "600", color: "#205375" }}>
                            3 Years Finalist in National Software Contest (NSC) by NECTEC
                        </Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Role: 
                            </Typography>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", marginLeft: "10px" }}>
                                Developer, Game Designer , Leader, Hardware
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex" }}>
                            <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                Description:
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: {xl:"1.5vw",lg:"1.6vw",md:"20px",sm:"20px",xs:"16px"}, marginTop: "5px", display: "flex" }}>
                        I developed Educational Game, Online Multiplayer Game and Website for Detecting Electrical Appliances in household.                        </Typography>
                    </Grid>
                    <Grid lg={12} sx={{marginTop:"10px",textAlign:"left"}}>
                        <ReadmoreButton sx={{marginLeft:"10px"}}>Read more</ReadmoreButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}