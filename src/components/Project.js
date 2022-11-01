import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography,Box, Grid} from "@mui/material";
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import emoji03 from "..//images/emoji03.png"
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import award01 from "..//images/Experience/fibo.jpeg"
import award02 from "..//images/Experience/jstp.png"
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    heroblockImage:{
        width:"45vh",
        height:"100%",
        marginTop:"40px",
        marginLeft:"auto",
        marginRight:"auto"
    },
    underLine:{
        width:"8vw",
        border:"2px solid #5DA7DB",
        borderRadius:"10px",
        marginBottom:"10px"
    },
    experienceThumbnail:{
        width:"100%",
        borderRadius:"10px"
    }
})

const KeywordButton = styled(Button)(({theme})=>({
    color:"white",
    fontWeight:"600",
    backgroundColor:"#5DA7DB",
    borderRadius:"8px",
    border:"1px solid #25316D",
    "&:hover":{
        backgroundColor:"#5DA7DB",
    },
}));

export default function Project (){
    const classes = useStyles();
    return(
        <Box className={classes.container} sx={{width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" },marginTop:"20px"}}>
            <Box sx={{width:"100%"}}>
                <Typography sx={{ fontSize: "2.5vw", marginTop: "40px", fontWeight: "600", color: "#205375",textAlign:"center"}}>Experience</Typography>
                <hr className={classes.underLine}/>
                <Grid container sx={{width:"100%",marginTop:"20px"}}>
                    <Grid item lg={5} sx={{padding:"10px"}}>
                        <img src={award01} className={classes.experienceThumbnail}/>
                    </Grid>
                    <Grid item lg={7} sx={{padding:"10px"}}>
                    <Typography sx={{fontSize:"1.75vw",fontWeight:"600", color: "#205375"}}>1st Prize Winner in Metaverse for Smart Factory Contest 2022</Typography>
                    <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex"}}>
                        <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex",color: "#205375",fontWeight:"600"}}>
                            Project:
                        </Typography>
                        <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex",marginLeft:"10px"}}>
                            Natural Latex Pillow Factory based on Digital Twins in Metaverse
                        </Typography>
                    </Typography>
                    <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex"}}>
                        <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex",color: "#205375",fontWeight:"600"}}>
                            Role:
                        </Typography>
                        <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex",marginLeft:"10px"}}>
                            3D and VR Developer
                        </Typography>
                    </Typography>
                    
                    </Grid>
                    <Grid item lg={5} sx={{padding:"10px"}}>
                        <img src={award02} className={classes.experienceThumbnail}/>
                    </Grid>
                    <Grid item lg={7} sx={{padding:"10px"}}>
                    <Typography sx={{fontSize:"1.75vw",fontWeight:"600", color: "#205375"}}>Junior Science Talent Project 24th (JSTP24) by NSTDA</Typography>
                    <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex"}}>
                        <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex",color: "#205375",fontWeight:"600"}}>
                            Project:
                        </Typography>
                        <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex",marginLeft:"10px"}}>
                            Pill Detection using Convolution Neural Networks
                        </Typography>
                    </Typography>
                    <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex"}}>
                        <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex",color: "#205375",fontWeight:"600"}}>
                            Description:
                        </Typography>
                    </Typography>
                    <Typography sx={{fontSize:"1.5vw",marginTop:"5px",display:"flex"}}>
                            A Science project in computer field. It was developed for detecting pills, which use for help people with visual disability
                        </Typography>
                    
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}