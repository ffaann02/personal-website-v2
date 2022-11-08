import { cardClasses, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
/// import technical skills icon
import jsIcon from "..//images/Logo/js.png"
import pythonIcon from "..//images/Logo/python.png"
import reactIcon from "..//images/Logo/react.png"
import nodejsIcon from "..//images/Logo/nodejs.png"
import unityIcon from "..//images/Logo/unity.png"
import mysqlIcon from "..//images/Logo/mysql.png"
import reactnativeIcon from "..//images/Logo/react-native.png"
import arduinoIcon from "..//images/Logo/arduino.png"
/// import tools icon
import gitIcon from "..//images/Logo/git.png"
import githubIcon from "..//images/Logo/github.png"
import azureIcon from "..//images/Logo/azure.png"
import postmanIcon from "..//images/Logo/postman.png"
import muiIcon from "..//images/Logo/mui.png"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    underLine:{
        width:"120px",
        border:"2px solid #5DA7DB",
        borderRadius:"10px",
        marginBottom:"10px",
        ['@media (max-width:900px)']:{
            width:"100px",
        },
        ['@media (max-width:600px)']:{
            width:"80px",
        }
    },
    skillIcon:{
        width:"3vw",
        ['@media (max-width:1530px)']:{
            width:"3.25vw",
        },
        ['@media (max-width:1200px)']:{
            width:"50px",
        },
        ['@media (max-width:1000px)']:{
            width:"40px",
        },
        ['@media (max-width:900px)']:{
            width:"80px",
        },
        ['@media (max-width:700px)']:{
            width:"70px",
        },
        ['@media (max-width:600px)']:{
            width:"60px",
        },
        ['@media (max-width:500px)']:{
            width:"50px",
        }
    }

})


export default function Skill() {
    const classes = useStyles();
    useEffect(()=>{
        Aos.init({ duration:1500});
    },[]);
    return (
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", position: "relative",height:{
            xl:"85vh",lg:"80vh",md:"75vh",sm:"100%",xs:"100%"}}} id="skills">
            <Box sx={{ position:{xl:"absolute",lg:"absolute",md:"absolute"}, width: "100%"}}>
                <Box sx={{ width: "100%", backgroundColor: "#F8F8F8", height:{
            xl:"50vh",lg:"50vh",md:"50vh",sm:"100%",xs:"100%"},paddingBottom:{xl:"0",lg:"0",md:"0",sm:"20px",xs:"20px"}}}>
                    <Grid container className={classes.container} sx={{
                        width: { xl:"60%",lg: "70%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center",
                    }}>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign: "center" ,padding:"0 20px"}}>
                            <Typography sx={{ fontSize:{xl:"2.5vw",lg:"36x",md:"36px",sm:"36px",xs:"30px"}, marginTop: "40px", fontWeight: "600", color: "#205375"}}>About Me</Typography>
                            <hr className={classes.underLine}/>
                            <Typography sx={{fontSize:{xl:"1vw",lg:"18px",md:"16px"},fontWeight:"600",color: "#205375",lineHeight:"1.75",marginTop:"20px"}}>
                            My name is Rudfaan Maimahad. I'm 19 years old, studying in Computer Engineering Bachelor at KMUTT. 
                            I'm interested in Software Development, especially Website and Mobile Application. 
                            And I also really enjoy Game Development, Basic Machine Learning and Robotic.
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Box> 
                <Grid container className={classes.container} sx={{
                    width: { xl:"60%",lg: "70%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center", top:{
                        xl:"70%",lg:"70%",md:"60%",sm:"80%",xs:"80%"}
                    ,position:{xl:"absolute",lg:"absolute",md:"absolute",sm:"",xs:""},
                    left:"0",right:"0"
                }} data-aos="fade-up">
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign: "center",backgroundColor:"white"
                    ,borderRadius:"20px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                        <Grid container sx={{width:"100%",height:"100%"}}>
                            <Grid item lg={4} md={4} sm={12} xs={12} sx={{borderRadius:{xl:"20px 0 0 20px",lg:"20px 0 0 20px"
                            ,md:"20px 0 0 20px",sm:"20px 20px 0 0",xs:"20px 20px 0 0 "},borderLeft:"1px solid #DDDDDD",borderRight:{lg:"none",md:"none",sm:"1px solid #DDDDDD",xs:"1px solid #DDDDDD"}
                            ,borderTop:"1px solid #DDDDDD",borderBottom:{lg:"1px solid #DDDDDD",md:"1px solid #DDDDDD",sm:"none",xs:"none"},padding:"30px 10px 20px 10px"}}>
                                <Typography variant="h6" sx={{fontSize:{xl:"1.5vw",lg:"1.5vw",md:"24px",sm:"30px",xs:"24px"},fontWeight:"600"}}>Technical Skills</Typography>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:{xl:"20px 40px"
                                ,lg:"20px 40px",md:"20px 30px",sm:"20px 100px",xs:"20px 20px"},marginTop:"20px"}}>
                                    <img src={jsIcon} className={classes.skillIcon}/>
                                    <img src={pythonIcon} className={classes.skillIcon}/>
                                    <img src={reactIcon} className={classes.skillIcon}/>
                                </Box>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:{xl:"20px 40px"
                                ,lg:"20px 40px",md:"20px 30px",sm:"20px 100px",xs:"20px 20px"}}}>
                                <img src={reactnativeIcon} className={classes.skillIcon}/>
                                    <img src={nodejsIcon} className={classes.skillIcon}/>
                                    <img src={unityIcon} className={classes.skillIcon}/>
                                    
                                </Box>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:{xl:"20px 80px"
                                ,lg:"20px 70px",md:"20px 70px",sm:"20px 180px",xs:"20px 80px"}}}>
                                    <img src={mysqlIcon} className={classes.skillIcon}/>
                                    <img src={arduinoIcon} className={classes.skillIcon}/>
                                </Box>
                                
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} sx={{border:"1px solid #DDDDDD",padding:"30px 10px 20px 10px"}}>
                            <Typography variant="h6" sx={{fontSize:{xl:"1.5vw",lg:"1.5vw",md:"24px",sm:"30px",xs:"24px"},fontWeight:"600"}}>Tools</Typography>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:{xl:"20px 40px"
                                ,lg:"20px 40px",md:"20px 30px",sm:"20px 100px",xs:"20px 20px"},marginTop:"20px"}}>
                                    <img src={gitIcon} className={classes.skillIcon}/>
                                    <img src={githubIcon} className={classes.skillIcon}/>
                                    <img src={azureIcon} className={classes.skillIcon}/>
                                </Box>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:{xl:"20px 80px"
                                ,lg:"20px 70px",md:"20px 70px",sm:"20px 180px",xs:"20px 80px"}}}>
                                    <img src={postmanIcon} className={classes.skillIcon}/>
                                    <img src={muiIcon} className={classes.skillIcon}/>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} sx={{borderRadius:{xl:"0 20px 20px 0",lg:"0 20px 20px 0 "
                            ,md:"0 20px 20px 0 ",sm:"0 0 20px 20px",xs:"0 0 20px 20px"},borderRight:"1px solid #DDDDDD"
                            ,borderTop:{xl:"1px solid #DDDDDD",lg:"1px solid #DDDDDD",md:"1px solid #DDDDDD",sm:"none",xs:"none"},borderBottom:"1px solid #DDDDDD",padding:"30px 10px 20px 10px"
                            ,borderLeft:{xl:"none",lg:"none",md:"none",sm:"1px solid #DDDDDD",xs:"1px solid #DDDDDD"}}}>
                                <Typography variant="h6" sx={{fontSize:{xl:"1.5vw",lg:"1.5vw",md:"24px",sm:"30px",xs:"24px"},fontWeight:"600"}}>Other Skills</Typography>
                                <Box sx={{padding:"20px 40px",marginTop:"10px"}}>
                                    <Typography variant="h6" sx={{fontSize:{xl:"1.3vw",lg:"1.5vw",md:"22px",sm:"26px",xs:"22px"},fontWeight:"600",color:"#205375"}}>Leadership</Typography>
                                    <Typography variant="h6" sx={{fontSize:{xl:"1.3vw",lg:"1.5vw",md:"22px",sm:"26px",xs:"22px"},fontWeight:"600",marginTop:"10px",color:"#205375"}}>Speaking</Typography>
                                    <Typography variant="h6" sx={{fontSize:{xl:"1.3vw",lg:"1.5vw",md:"22px",sm:"26px",xs:"22px"},fontWeight:"600",marginTop:"10px",color:"#205375"}}>Game Design</Typography>
                                    <Typography variant="h6" sx={{fontSize:{xl:"1.3vw",lg:"1.5vw",md:"22px",sm:"26px",xs:"22px"},fontWeight:"600",marginTop:"10px",color:"#205375"}}>Typing</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}