import { cardClasses, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
import jsIcon from "..//images/Logo/js.png"
import pythonIcon from "..//images/Logo/python.png"
import reactIcon from "..//images/Logo/react.png"
import nodejsIcon from "..//images/Logo/nodejs.png"
import unityIcon from "..//images/Logo/unity.png"
import mysqlIcon from "..//images/Logo/mysql.png"
import reactnativeIcon from "..//images/Logo/react-native.png"
import arduinoIcon from "..//images/Logo/arduino.png"

const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    underLine:{
        width:"8vw",
        border:"2px solid #5DA7DB",
        borderRadius:"10px",
        marginBottom:"10px"
    },
    skillIcon:{
        width:"3vw"
    }

})

export default function Skill() {
    const classes = useStyles();
    return (
        <Box sx={{ marginTop: "60px", display: "flex", flexDirection: "column", position: "relative" }}>
            <Box sx={{ position: "absolute", width: "100%" }}>
                <Box sx={{ width: "100%", backgroundColor: "#F8F8F8", }}>
                    <Grid container className={classes.container} sx={{
                        width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center", height: "50vh"
                    }}>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign: "center" ,padding:"0 20px"}}>
                            <Typography sx={{ fontSize: "2.5vw", marginTop: "40px", fontWeight: "600", color: "#205375"}}>About Me</Typography>
                            <hr className={classes.underLine}/>
                            <Typography sx={{fontSize:"1vw",fontWeight:"600",color: "#205375",lineHeight:"1.75",marginTop:"20px"}}>
                            My name is Rudfaan Maimahad. I'm 19 years old, studying in Computer Engineering Bachelor at KMUTT. <br/>
                            I'm interested in Software Development, especially Website and Mobile Application.<br/> 
                            And I also really enjoy Game Development, Basic Machine Learning and Robotic.
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </Box>
                <Grid container className={classes.container} sx={{
                    width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center", height: "100%", top:"75%",position:"absolute",left:"0",right:"0"
                }}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign: "center",backgroundColor:"white"
                    ,borderRadius:"20px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                        <Grid container sx={{width:"100%",height:"50vh"}}>
                            <Grid item lg={4} md={4} sx={{borderRadius:"20px 0 0 20px",borderLeft:"1px solid #DDDDDD"
                            ,borderTop:"1px solid #DDDDDD",borderBottom:"1px solid #DDDDDD",padding:"30px 10px 20px 10px"}}>
                                <Typography variant="h6" sx={{fontSize:"1.25vw",fontWeight:"600"}}>Technical Skills</Typography>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:"20px 40px",marginTop:"20px"}}>
                                    <img src={jsIcon} className={classes.skillIcon}/>
                                    <img src={pythonIcon} className={classes.skillIcon}/>
                                    <img src={reactIcon} className={classes.skillIcon}/>
                                </Box>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:"20px 40px"}}>
                                <img src={reactnativeIcon} className={classes.skillIcon}/>
                                    <img src={nodejsIcon} className={classes.skillIcon}/>
                                    <img src={unityIcon} className={classes.skillIcon}/>
                                    
                                </Box>
                                <Box sx={{display:"flex",justifyContent:"space-between",padding:"20px 80px"}}>
                                    <img src={mysqlIcon} className={classes.skillIcon}/>
                                    <img src={arduinoIcon} className={classes.skillIcon}/>
                                </Box>
                                
                            </Grid>
                            <Grid item lg={4} md={4} sx={{border:"1px solid #DDDDDD",padding:"30px 10px 20px 10px"}}>
                            <Typography variant="h6" sx={{fontSize:"1.25vw",fontWeight:"600"}}>Tools</Typography>

                            </Grid>
                            <Grid item lg={4} md={4} sx={{borderRadius:"0 20px 20px 0",borderRight:"1px solid #DDDDDD"
                            ,borderTop:"1px solid #DDDDDD",borderBottom:"1px solid #DDDDDD",padding:"30px 10px 20px 10px"}}>
                            <Typography variant="h6" sx={{fontSize:"1.25vw",fontWeight:"600"}}>Other Skills</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}