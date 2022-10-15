import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },

})

export default function Skill() {
    const classes = useStyles();
    return (
        <Box sx={{ marginTop: "60px", display: "flex", flexDirection: "column", position: "relative" }}>
            <Box sx={{ position: "absolute", width: "100%" }}>
                <Box sx={{ width: "100%", backgroundColor: "#FBB454", }}>
                    <Grid container className={classes.container} sx={{
                        width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center", height: "40vh"
                    }}>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign: "center" }}>
                            <Typography sx={{ fontSize: "1.75vw", marginTop: "5%", fontWeight: "600", color: "#06283D" }}>Nice to meet you.</Typography>
                            <Typography sx={{ fontSize: "1vw", marginTop: "10px" }}>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container className={classes.container} sx={{
                    width: { lg: "60%", md: "90%", sm: "90%", xs: "90%" }, textAlign: "center", height: "40vh", top:"75%",position:"absolute",left:"0",right:"0"
                }}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ textAlign: "center",backgroundColor:"red"
                    ,}}>
                        <Typography sx={{ fontSize: "1.75vw", marginTop: "5%", fontWeight: "600", color: "#06283D" }}>Nice to meet you.</Typography>
                        <Typography sx={{ fontSize: "1vw", marginTop: "10px" }}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}