import React, { useState, useEffect } from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography, Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { useNavigate, NavLink } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import emoji03 from "..//images/emoji03.png"
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import award01 from "..//images/Optimized/fibo.jpeg"
import award02 from "..//images/Optimized/jstp-min.png"
import award03 from "..//images/Optimized/nsc-min.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
        width: "200px",
        border: "2px solid #5DA7DB",
        borderRadius: "10px",
        marginBottom: "10px",
        ['@media (max-width:900px)']: {
            width: "150px",
        },
        ['@media (max-width:600px)']: {
            width: "120px",
        }
    },
    experienceThumbnail: {
        width: "100%",
        borderRadius: "10px",
        ['@media (max-width:900px)']: {
            borderRadius: "10px 10px 0 0"
        }
    }
})

const ReadmoreButton = styled(Button)(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "600",
    color: "#023E8A",
    borderRadius: "8px",
    backgroundColor: "#EEF1FF",
    padding: "10px 20px",
    transition: "0.5s",
    "&:hover": {
        padding: "10px 30px",
        backgroundColor: "#B8E8FC"
    },
    ['@media (max-width:600px)']: {
        fontSize: "16px"
    }
}));

const KeywordProject01 = styled(Button)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "10px",
    color: "#023E8A",
    borderRadius: "8px",
    backgroundColor: "#EEF1FF",
    padding: "5px 10px",
    transition: "0.5s",
    "&:hover": {
        backgroundColor: "#B8E8FC"
    },
    ['@media (max-width:600px)']: {
        fontSize: "10px",
        marginTop: "10px",

    },


}));


const GridImage = styled(Grid)(({ theme }) => ({

}));

export default function Project() {
    const history = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    const classes = useStyles();
    return (
        <Box className={classes.container} sx={{ width: { xl: "60%", lg: "70%", md: "90%", sm: "90%", xs: "90%" }, marginTop: "20px" }} id="projects" data-aos="fade-up">
            <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontSize: { xl: "2.5vw", lg: "36x", md: "36px", sm: "30px", xs: "24px" }, marginTop: "10px", fontWeight: "600", color: "#205375", textAlign: "center" }}>Projects & Experience</Typography>
                <hr className={classes.underLine} />
                <Grid container sx={{ width: "100%", marginTop: "20px", padding: "10px" }}>
                    <Grid item lg={12} md={12} sx={{ marginTop: "20px" }}>
                        <Grid id="ProjectCard" container sx={{ width: "100%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px" }}>
                            <GridImage item lg={4} md={4} sm={12} xs={12} sx={{
                                padding: {
                                    xl: "20px 20px 10px 20px"
                                    , lg: "20px 20px 10px 20px", md: "20px 20px 10px 20px", sm: "0", xs: "0"
                                }
                            }}>
                                <img src={award01} className={classes.experienceThumbnail} />
                            </GridImage>
                            <Grid item lg={8} md={8} sm={12} xs={12} sx={{ padding: { xl: "20px 20px 10px 0", lg: "20px 20px 10px 0", md: "20px 20px 10px 0", sm: "10px 15px", xs: "10px 15px" } }}>
                                <Typography sx={{
                                    fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "20px" }
                                    , fontWeight: "600", color: "#205375"
                                }}>1st Prize Winner in Metaverse for Smart Factory Contest 2022 </Typography>
                                <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex" }}>
                                    <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                        Project:
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex"
                                        , marginLeft: "10px", color: "#6B728E"
                                    }}>
                                        Natural Latex Pillow Factory based on Digital Twins in Metaverse
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex" }}>
                                    <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                        Role:
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }
                                        , marginTop: "5px", display: "flex", marginLeft: "10px", color: "#6B728E"
                                    }}>
                                        3D and VR Developer
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid id="bottom-card-1" item lg={12} sx={{
                                width: '100%'
                                , padding: { xl: "10px 20px", lg: "10px 20px", md: "10px 20px", sm: "10px 10px", xs: "10px 10px" }, borderTop: "2px solid rgba(99, 99, 99, 0.1)"
                            }}>
                                <Grid container sx={{ width: "100%" }}>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Typography sx={{
                                            fontSize: { xl: "1.1vw", lg: "1.2vw", md: "1.8vw", sm: "18px", xs: "16px" }
                                            , marginTop: "5px", display: "flex", color: "#6B728E", fontWeight: "400"
                                        }}>
                                            <LocationOnIcon sx={{
                                                fontSize: { xl: "1.5vw", lg: "1.7vw", md: "2.5vw", sm: "24px", xs: "20px" }
                                                , marginRight: "5px", color: "#EC994B"
                                            }} />
                                            Organize by FIBO KMUTT, Microsoft Thailand.
                                        </Typography></Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{
                                        textAlign: {
                                            xl: "right", lg: "right"
                                            , md: "right", sm: "left", xs: "left"
                                        }, marginTop: {
                                            xl: "0", lg: "0"
                                            , md: "0", sm: "0", xs: "0"
                                        }
                                    }}>
                                        <KeywordProject01>Contest</KeywordProject01>
                                        <KeywordProject01>Metaverse</KeywordProject01>
                                        <KeywordProject01>Smart Factory</KeywordProject01>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sx={{ marginTop: "20px" }}>
                        <Grid id="ProjectCard" container sx={{ width: "100%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px" }}>
                            <GridImage item lg={4} md={4} sm={12} xs={12} sx={{
                                padding: {
                                    xl: "20px 20px 10px 20px"
                                    , lg: "20px 20px 10px 20px", md: "20px 20px 10px 20px", sm: "0", xs: "0"
                                }
                            }}>
                                <img src={award02} className={classes.experienceThumbnail} />
                            </GridImage>
                            <Grid item lg={8} md={8} sm={12} xs={12} sx={{ padding: { xl: "20px 20px 10px 0", lg: "20px 20px 10px 0", md: "20px 20px 10px 0", sm: "10px 15px", xs: "10px 15px" } }}>
                                <Typography sx={{
                                    fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "20px" }
                                    , fontWeight: "600", color: "#205375"
                                }}>Junior Science Talent Project 24th (JSTP24)</Typography>
                                <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex" }}>
                                    <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                        Project:
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex"
                                        , marginLeft: "10px", color: "#6B728E"
                                    }}>
                                        Pill Detection using Convolution Neural Networks
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex" }}>
                                    <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                        Description:
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }
                                        , marginTop: "5px", display: "flex", marginLeft: "10px", color: "#6B728E"
                                    }}>
                                        A Science project in computer field. It was developed for detecting pills, which use for help people with visual disability
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid id="bottom-card-1" item lg={12} sx={{
                                width: '100%'
                                , padding: { xl: "10px 20px", lg: "10px 20px", md: "10px 20px", sm: "10px 10px", xs: "10px 10px" }, borderTop: "2px solid rgba(99, 99, 99, 0.1)"
                            }}>
                                <Grid container sx={{ width: "100%" }}>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Typography sx={{
                                            fontSize: { xl: "1.1vw", lg: "1.2vw", md: "1.8vw", sm: "18px", xs: "16px" }
                                            , marginTop: "5px", display: "flex", color: "#6B728E", fontWeight: "400"
                                        }}>
                                            <LocationOnIcon sx={{
                                                fontSize: { xl: "1.5vw", lg: "1.7vw", md: "2.5vw", sm: "24px", xs: "20px" }
                                                , marginRight: "5px", color: "#EC994B"
                                            }} />
                                            Organize by NECTEC, NSTDA.
                                        </Typography></Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{
                                        textAlign: {
                                            xl: "right", lg: "right"
                                            , md: "right", sm: "left", xs: "left"
                                        }, marginTop: {
                                            xl: "0", lg: "0"
                                            , md: "0", sm: "0", xs: "0"
                                        }
                                    }}>
                                        <KeywordProject01>Research</KeywordProject01>
                                        <KeywordProject01>AI</KeywordProject01>
                                        <KeywordProject01>Medical</KeywordProject01>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sx={{marginTop:"20px"}}>
                        <Grid id="ProjectCard" container sx={{ width: "100%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px" }}>
                            <GridImage item lg={4} md={4} sm={12} xs={12} sx={{
                                padding: {
                                    xl: "20px 20px 10px 20px"
                                    , lg: "20px 20px 10px 20px", md: "20px 20px 10px 20px", sm: "0", xs: "0"
                                }
                            }}>
                                <img src={award03} className={classes.experienceThumbnail} />
                            </GridImage>
                            <Grid item lg={8} md={8} sm={12} xs={12} sx={{ padding: { xl: "20px 20px 10px 0", lg: "20px 20px 10px 0", md: "20px 20px 10px 0", sm: "10px 15px", xs: "10px 15px" } }}>
                                <Typography sx={{
                                    fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "20px" }
                                    , fontWeight: "600", color: "#205375"
                                }}>3 Years Finalist in National Software Contest (NSC)
                                </Typography>
                                <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex" }}>
                                    <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                        Role:
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex"
                                        , marginLeft: "10px", color: "#6B728E"
                                    }}>
                                        Developer, Game Designer , Leader, Hardware
                                    </Typography>
                                </Typography>
                                <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex" }}>
                                    <Typography sx={{ fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }, marginTop: "5px", display: "flex", color: "#205375", fontWeight: "600" }}>
                                        Description:
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: { xl: "1.25vw", lg: "1.5vw", md: "2vw", sm: "22px", xs: "16px" }
                                        , marginTop: "5px", display: "flex", marginLeft: "10px", color: "#6B728E"
                                    }}>
                                        I developed Educational Game, Online Multiplayer Game and Website for Detecting Electrical Appliances in household.                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid id="bottom-card-1" item lg={12} sx={{
                                width: '100%'
                                , padding: { xl: "10px 20px", lg: "10px 20px", md: "10px 20px", sm: "10px 10px", xs: "10px 10px" }, borderTop: "2px solid rgba(99, 99, 99, 0.1)"
                            }}>
                                <Grid container sx={{ width: "100%" }}>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Typography sx={{
                                            fontSize: { xl: "1.1vw", lg: "1.2vw", md: "1.8vw", sm: "18px", xs: "16px" }
                                            , marginTop: "5px", display: "flex", color: "#6B728E", fontWeight: "400"
                                        }}>
                                            <LocationOnIcon sx={{
                                                fontSize: { xl: "1.5vw", lg: "1.7vw", md: "2.5vw", sm: "24px", xs: "20px" }
                                                , marginRight: "5px", color: "#EC994B"
                                            }} />
                                            Organize by NECTEC, NSTDA.
                                        </Typography></Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{
                                        textAlign: {
                                            xl: "right", lg: "right"
                                            , md: "right", sm: "left", xs: "left"
                                        }, marginTop: {
                                            xl: "0", lg: "0"
                                            , md: "0", sm: "0", xs: "0"
                                        }
                                    }}>
                                        <KeywordProject01>Contest</KeywordProject01>
                                        <KeywordProject01>Game dev</KeywordProject01>
                                        <KeywordProject01>IOT</KeywordProject01>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid lg={12} sx={{ marginTop: "30px", textAlign: "center", width: "100%" }}>
                        <ReadmoreButton sx={{}} onClick={()=>{
                    history("/projects")
                }}>Read more</ReadmoreButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}