import React, { useState, useEffect } from 'react';
import { AppBar, Button, Drawer, Grid, styled, Toolbar, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import { makeStyles } from '@mui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import DateRangeIcon from '@mui/icons-material/DateRange';
import BookIcon from '@mui/icons-material/Book';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Axios from "axios"
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css"
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
        marginTop: "40px"
    },
    profileImg: {
        width: "100%",
        borderRadius: "6px",
        border: "3px solid #ADE8F4",
    },
    skillList: {
        fontSize: "16px",
        display: "flex",
        marginTop: "10px"
    },
    viewAllBlog: {
        marginLeft: "6px",
        marginTop: "2px",
        fontSize: "20px"
    },
    viewAllBlogHover: {
        marginLeft: "14px",
        marginTop: "2px",
        fontSize: "20px"
    },
    blogImg: {
        width: "100%",
        height: "160px",
        borderRadius: "6px",
        ['@media (max-width:600px)']: {
            height: "220px"
        }
    },


})

const TagBlog = styled(Typography)(({ theme }) => ({
    color: "#023E8A",
    fontWeight: "600",
    fontSize: "16px",
    backgroundColor: "#ADE8F4",
    padding: "3px 8px 3px 8px",
    borderRadius: "10px",
    marginLeft: "4px",
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
    color: "#00B4D8",
    borderRadius: "8px",
    "&:hover": {
        backgroundColor: "rgba(202, 240, 248,0.4)",
        color: "#0077B6"
    },
    cursor: "pointer",
    display: 'flex',
    height: "40px",
    padding: "10px",
    marginTop: "6px",
    marginLeft: "10px"
}));



const Blog = () => {
    var today = new Date();
    const [refreshStatus, setRefreshStatus] = useState("h")
    const [mediumBlog, setMediumBlog] = useState([]);
    const [viewAllHover, setViewAllHover] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ffaann")
            .then(response => {
                setMediumBlog(response.data.items)
            })
    }, [])
    useEffect(()=>{
        Aos.init({ duration:1500});
    },[]);

    return (
        <div className={classes.Wrapper}>{mediumBlog.length > 0 ?
            <Grid id="blog" container className={classes.container} sx={{ width: { xl:"60%",lg: "70%", md: "90%", sm: "90%", xs: "90%" }, height: "100%" }} data-aos="fade-up">
                <Grid item lg={12} md={12} xs={12} sx={{ display: 'flex', height: "50px" }}>
                    <Typography variant="h4" sx={{ fontWeight: "500", fontSize: "36px" ,color:"#205375",fontWeight:"600"}}>My Blog</Typography>
                    <ViewAllButton href="https://medium.com/@ffaann" onMouseOver={() => { setViewAllHover(true) }} onMouseOut={() => { setViewAllHover(false) }}>
                        <Box sx={{ display: 'flex' }}>
                            <Typography href="" sx={{ fontWeight: "700", fontSize: "18px" }}>View All</Typography>
                            <FontAwesomeIcon className={viewAllHover ? classes.viewAllBlogHover : classes.viewAllBlog} icon={faArrowRight} />
                        </Box>
                    </ViewAllButton>
                </Grid>
               
                <Grid item lg={12} md={12} xs={12} sx={{ display: 'flex', height: "100%" ,marginTop:"10px"}}>
                    <BookIcon sx={{marginTop:"2px", color:"#023E8A"}}/>
                    <Typography variant="h6" sx={{fontWeight:"600",color:"#0077B6"}}>บล็อกล่าสุด</Typography>
                </Grid>
                <Grid onClick={()=>{window.open(mediumBlog[0].link)}} item lg={4} md={4} sm={12} xs={12} sx={{
                    height: { lg: "70%", md: "70%", sm: "30%", xs: "30%" },
                    padding: { lg: "0 10px 0 10px", md: "0 10px 0 10px", sm: "10px", xs: "10px" }, marginTop: "10px"
                }}>
                    <Box sx={{ width: "100%", height: "100%", display: { lg: "block", md: "block", sm: "flex", xs: "block" } ,cursor:"pointer"}}>
                        <Box sx={{ height: { lg: "40%", md: "40%", sm: "50%", xs: "50%" }, width: { lg: "100%", md: "100%", sm: "40%", xs: "100%" } }}>
                            <img src={mediumBlog[0].thumbnail} className={classes.blogImg} />
                        </Box>
                        <Box sx={{ height: { lg: "60%", md: "60%", sm: "50%", xs: "50%" }, width: { lg: "100%", md: "100%", sm: "60%", xs: "100%" }, marginLeft:{lg:"0",md:"0",sm:"10px",xs:"0"}}}>
                            <Typography variant="h6" sx={{ fontSize: { lg: "20px", md: "20px", sm: "14px", xs: "18px" } }}>{mediumBlog[0].title}</Typography>
                            <Typography variant="h6" sx={{ display: 'flex', marginTop: "10px" }}><DateRangeIcon sx={{ color: "#0096C7", fontSize: { lg: "22px", md: "22px", sm: "22px", xs: "20px" } }} />
                                <Typography sx={{ fontSize: "18px", fontWeight: "500", color: "#0096C7", marginLeft: "4px", fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "16px" } }}>
                                    {mediumBlog[0].pubDate}
                                </Typography></Typography>
                            <Typography variant="a" sx={{ fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "16px" } }}>{(mediumBlog[0].description.split(">")[4]).substring(0,150)}...</Typography>

                            <Box sx={{ width: { lg: "90%", md: "80%", sm: "70%", xs: "260px" }, display: "flex", marginTop: "10px" }}>
                                {(mediumBlog[0].categories).map(tag =>
                                    <TagBlog >{tag}</TagBlog>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid onClick={()=>{window.open(mediumBlog[1].link)}} item lg={4} md={4} sm={12} xs={12} sx={{
                    height: { lg: "70%", md: "70%", sm: "30%", xs: "30%" },
                    padding: { lg: "0 10px 0 10px", md: "0 10px 0 10px", sm: "10px", xs: "10px" }, marginTop: "10px"
                }}>
                    <Box sx={{ width: "100%", height: "100%", display: { lg: "block", md: "block", sm: "flex", xs: "block" } ,cursor:"pointer"}}>
                        <Box sx={{ height: { lg: "40%", md: "40%", sm: "50%", xs: "50%" }, width: { lg: "100%", md: "100%", sm: "40%", xs: "100%" } }}>
                            <img src={mediumBlog[1].thumbnail} className={classes.blogImg} />
                        </Box>
                        <Box sx={{ height: { lg: "60%", md: "60%", sm: "50%", xs: "50%" }, width: { lg: "100%", md: "100%", sm: "60%", xs: "100%" }, marginLeft:{lg:"0",md:"0",sm:"10px",xs:"0"}}}>
                            <Typography variant="h6" sx={{ fontSize: { lg: "20px", md: "20px", sm: "14px", xs: "18px" } }}>{mediumBlog[1].title}</Typography>
                            <Typography variant="h6" sx={{ display: 'flex', marginTop: "10px" }}><DateRangeIcon sx={{ color: "#0096C7", fontSize: { lg: "22px", md: "22px", sm: "22px", xs: "20px" } }} />
                                <Typography sx={{ fontSize: "18px", fontWeight: "500", color: "#0096C7", marginLeft: "4px", fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "16px" } }}>
                                    {mediumBlog[1].pubDate}
                                </Typography></Typography>
                            <Typography variant="a" sx={{ fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "16px" } }}>{(mediumBlog[1].description.split(">")[4]).substring(0,150)}...</Typography>

                            <Box sx={{ width: { lg: "90%", md: "80%", sm: "70%", xs: "260px" }, display: "flex", marginTop: "10px" }}>
                                {(mediumBlog[1].categories).map(tag =>
                                    <TagBlog >{tag}</TagBlog>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid onClick={()=>{window.open(mediumBlog[2].link)}} item lg={4} md={4} sm={12} xs={12} sx={{
                    height: { lg: "70%", md: "70%", sm: "30%", xs: "30%" },
                    padding: { lg: "0 10px 0 10px", md: "0 10px 0 10px", sm: "10px", xs: "10px" }, marginTop: "10px"
                }}>
                    <Box sx={{ width: "100%", height: "100%", display: { lg: "block", md: "block", sm: "flex", xs: "block" } ,cursor:"pointer"}}>
                        <Box sx={{ height: { lg: "40%", md: "40%", sm: "50%", xs: "50%" }, width: { lg: "100%", md: "100%", sm: "40%", xs: "100%" } }}>
                            <img src={mediumBlog[2].thumbnail} className={classes.blogImg} />
                        </Box>
                        <Box sx={{ height: { lg: "60%", md: "60%", sm: "50%", xs: "50%" }, width: { lg: "100%", md: "100%", sm: "60%", xs: "100%" }, marginLeft:{lg:"0",md:"0",sm:"10px",xs:"0"}}}>
                            <Typography variant="h6" sx={{ fontSize: { lg: "20px", md: "20px", sm: "14px", xs: "18px" } }}>{mediumBlog[2].title}</Typography>
                            <Typography variant="h6" sx={{ display: 'flex', marginTop: "10px" }}><DateRangeIcon sx={{ color: "#0096C7", fontSize: { lg: "22px", md: "22px", sm: "22px", xs: "20px" } }} />
                                <Typography sx={{ fontSize: "18px", fontWeight: "500", color: "#0096C7", marginLeft: "4px", fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "16px" } }}>
                                    {mediumBlog[2].pubDate}
                                </Typography></Typography>
                            <Typography variant="a" sx={{ fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "16px" } }}>{(mediumBlog[2].description.split(">")[4]).substring(0,150)}...</Typography>

                            <Box sx={{ width: { lg: "90%", md: "80%", sm: "70%", xs: "260px" }, display: "flex", marginTop: "10px" }}>
                                {(mediumBlog[2].categories).map(tag =>
                                    <TagBlog >{tag}</TagBlog>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={12} md={12} xs={12} sx={{ display: 'flex', height: "100%" ,marginTop:"30px"}}>
                    <DriveFileRenameOutlineIcon sx={{color:"#023E8A",fontSize:"30px"}}/>
                    <Typography variant="h6" sx={{fontWeight:"600",color:"#0077B6"}}>เขียนโดย Faan</Typography>
                </Grid>
                
            </Grid>
            : ""}</div>
    )
}
export default Blog;