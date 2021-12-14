import * as React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

//importing self made components
import TotalDrugsCard from '../src/components/TotalDrugsCard.js';
import YourDrugsCard from './components/YourDrugsCard.js';
import YourInteractionsCard from './components/YourInteractionsCard.js';
import HomeCard from './components/HomeCard.js';
import WebsiteVisitsGraph from './components/WebsiteVisitsGraph.js';
import MostUsedDrugsGraph from './components/MostUsedDrugsGraph.js';
import UserActivityTimeline from './components/UserActivityTimeline.js';
import AppBarSearch from './components/appBarSearch.js';
import AccountPopover from './components/AccountPopOver.js';
import DashboardSidebar from './components/Sidebar.js';


//material ui imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Stack, StyledEngineProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { styled } from "@mui/styles";
import { alpha } from "@mui/material";


//material ui icon imports
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

//google font imports
import "@fontsource/advent-pro/600.css";
import "@fontsource/public-sans/600.css";

//herocons ui icon imports



//sidebar width constant
const drawerWidth = 240;

//material ui CSS classes
const useStyles = makeStyles({

    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    
    header: {

        position: "sticky",
        backgroundColor: "transparent",
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        boxShadow: "none",
        backdropFilter: "blur(6px)",
    },

    headerToolBar: {

        width: "80%",
        margin: "0 auto",
    },

    iconButtonProfile : {

        ml: "2",
        position: "absolute",
        right: "-100px",
    },

    avatarIcon: {

        width: "35px",
        height: "35px",
        backgroundColor: "#2ecc71",
        "&:hover,&:focus": {

            backgroundColor: "#555555",
            transition: "ease-in-out 0.25s ",
        },

    },

    iconButtonNotification: {

        ml: "2",
        position: "absolute",
        right: "-50px",
        "&:hover,&:focus": {

            color: "#2ecc71",
            transition: "ease-in-out 0.25s ",
        },

    },

    sideDrawer: {

        width: drawerWidth,
        flexShrink: "0",
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    },

    sideDrawerBox: {

        overflow: "auto",
    },

    pageLink: {

        textDecoration: "none",
        "&:focus,&:hover": {

            textDecoration: "none",
        },
    },

    drawerListItem: {

        padding: "20px",
    },

    drawerListIcon: {

        color: "#2ecc71",
        "&:hover,&:focus": {

            color: "#555555",
            transition: "ease-in-out 0.25s ",
        },
    },

    drawerListIconText: {

        "& span": {

            fontFamily: "Public Sans",
            color: "#555555",
            textShadow: "2px 2px rgba(85,85,85,0.10)",
            "&:hover,&:focus": {

                textShadow: "5px 5px rgba(85,85,85,0.20)",
                transition: "ease-in-out 0.25s ",
            },
        },
    },

    toolCard: {

        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.025)",
        backgroundColor: "rgba(0,0,0,0.05)",
        alignItems: "center",
        width: "250px",
        height: "350px",
    },

    toolCardMedia: {

        paddingTop: "10%",
        width: "125px",
    },

    toolCardBtn: {

        color: "#fff",
        backgroundColor: "#2ecc71",
        width: "100px",
        textShadow: "2px 2px rgba(0,0,0,0.10)",
        fontFamily: "Public Sans",
        "&:hover,&:focus": {

            backgroundColor: "#555555",
            transition: "ease-in-out 0.25s ",
            textShadow: "5px 5px rgba(0,0,0,0.25)",
        },
    },

    profileMenuItem: {

        fontFamily: "Public Sans",
        "&:hover": {

            backgroundColor: "rgba(85,85,85,0.15)",
        },


    },

    profileMenuTopIcons: {

        color: "#fff",
        backgroundColor: "#2ecc71",
        "&:hover,&:focus": {

            backgroundColor: "#555555",
            transition: "ease-in-out 0.25s ",
        },



    },


    profileMenuBottomIcons: {

        color: "#555555",
        "&:hover,&:focus": {

            color: "#2ecc71",
            transition: "ease-in-out 0.25s ",
        },


    },

    mainTitle: {

        fontFamily: "Public Sans",
        marginBottom: "1.5rem",

    },

    cardText: {

        fontFamily: "Public Sans",

    },

    greetingsText: {

        fontFamily: "Public Sans",
        color: "#555555",
    },

});



function Dashboard () {

    const classes = useStyles();

    const[anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleProfileClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {

        setAnchorEl(null);
    };


    return (

        <StyledEngineProvider injectFirst>

            <div sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "64px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: "0px",
                width: "100%",
                zIndex: -2,
            }}>

                <AppBar className={classes.header}>
                    <Toolbar className={classes.headerToolBar}>

                        <a href="/newHomePage" className="navbar-brand">Drug<span className="text-primary">Interactor</span></a>

                        <AppBarSearch />
                        <Box sx={{ flexGrow: 1 }} />

                        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                            <AccountPopover />
                        </Stack>


                    </Toolbar>
                </AppBar>

                <DashboardSidebar/>



                <Box 
                    component="main"
                    sx={{ 
                        flexGrow: 1,
                        width: `calc(100% - ${drawerWidth}px)`,
                        marginLeft: 35,
                    }}
                >
                    <Container maxWidth="xl">
                        <Box sx={{ pb: 5 }}>
                            <Typography variant='h4' className={classes.greetingsText}>Greetings, Welcome back</Typography>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={3}>
                                <TotalDrugsCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <YourDrugsCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <YourInteractionsCard />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <HomeCard />
                            </Grid>
                            <Grid item xs={12} md={6} lg={8}>
                                <WebsiteVisitsGraph />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <UserActivityTimeline />
                            </Grid>
                            <Grid item xs={12} md={6} lg={8}>
                                <MostUsedDrugsGraph />
                            </Grid>






                        </Grid>
                    </Container>

                </Box>

                













            </div>
        </StyledEngineProvider>

    );
}

export default Dashboard;