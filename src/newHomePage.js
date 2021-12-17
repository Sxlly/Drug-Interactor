import * as React from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

//importing self made components
import AppBarSearch from './components/appBarSearch';
import AccountPopover from './components/AccountPopOver';
import DashboardSidebar from './components/Sidebar';


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
        boxShadow: "0px 0px 0px 0px"
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

    }

});








//card constants to render to home page
const cards = [
    {
        name: "Home",
        description: "Home Page",
        img: "https://www.svgrepo.com/show/95944/home.svg",
        path: "/newHomePage",
    },
    {
        name: "Interaction Pair Tool",
        description: "The Online Tool",
        img: "https://www.svgrepo.com/show/106499/chemistry.svg",
        path: "/getInteractionPair",
    },
    {
        name: "All Interactions Tool",
        description: "The Online Tool",
        img: "https://www.svgrepo.com/show/126805/chemistry.svg",
        path: "/getDrugInteraction",
    },
    {
        name: "All Substances",
        description: "The Online Tool",
        img: "https://www.svgrepo.com/show/259280/chemistry-laboratory.svg",
        path: "/AllDrugTerms",
    },
    {
        name: "Rxcui ID Finder Tool",
        description: "The Online Tool",
        img: "https://www.svgrepo.com/show/256763/id-id.svg",
        path: "/getRxcuiId",
    },
    {
        name: "Molecule View Tool",
        description: "The Online Tool",
        img: "https://www.svgrepo.com/show/78185/molecular-structure.svg",
        path: "/drug3dtest",
    },
];


function NewHomePage () {

    const classes = useStyles();

    const[anchorEl, setAnchorEl] = React.useState(null);

    return (

        <StyledEngineProvider injectFirst>

            <div sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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

                        <AppBarSearch />
                        <Box sx={{ flexGrow: 1 }} />

                        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                            <AccountPopover />
                        </Stack>
                    </Toolbar>

                </AppBar>

                <DashboardSidebar />

                <Box 
                    component="main"
                    sx={{ 
                        flexGrow: 1,
                        width: `calc(100% - ${drawerWidth}px)`,
                        marginLeft: 35,
                    }}
                >

                    <Toolbar />
                    <Container maxWidth="lg" sx={{ 
                        paddingTop: (theme) => theme.spacing(4),
                        paddingBottom: (theme) => theme.spacing(4),
                    }}>
                        <div className="page-banner home-banner">
                            <div className="row align-items-center flex-wrap-reverse h-100">
                                <div className="col-md-6 py-5 wow fadeInLeft">
                                    <h1 className={classes.mainTitle} >Welcome to Drug Interactor</h1>
                                    <p className="text-lg text-grey mb-5">Take Substances Safely</p>
                                    <Button className={classes.toolCardBtn}>
                                        Dive In
                                    </Button>
                                </div>
                                <div className="col-md-6 py-5 wow zoomIn">
                                    <div className="img-fluid text-center">
                                        <img title="LSD Molecule" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/LSD_Structure.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <a href="" className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down"></span></a>
                        </div>


                    </Container>
                    

                    <Grid 
                        container 
                        spacing={5} 
                        alignItems="center" 
                        justify="center" 
                        sx={{ 
                            width: `calc(100% - ${drawerWidth}px)`,
                            marginLeft: 22.5,
                        }}
                    >
                        {cards.map((card) => (
                            <Grid item key={card.name} xs={12} sm={6} md={4} spacing={2}>
                                <Card className={classes.toolCard}>
                                    <CardMedia
                                        className={classes.toolCardMedia}
                                        src={card.img}
                                        component="img"
                                        title="title"
                                        square
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                                            {card.name}
                                        </Typography>
                                        <Typography>{card.description}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`${card.path}`} className={classes.pageLink}>
                                            <Button className={classes.toolCardBtn}>
                                                View
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Box>

                <Divider sx={{ padding: "100px" }}/>


                
                <footer>
                    <Box 
                        px={{ xs: 3, sm: 10}} 
                        py={{ xs: 5, sm: 10}}
                    >
                        <Container maxWidth="lg">
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={4}>
                                    <Box borderBottom={1}>Help</Box>
                                    <Box>
                                        <Link href="/" color='inherit'>
                                            Contact
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link href="/" color='inherit'>
                                            Support
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>

                    </Box>
                </footer>
                


                



            </div>
        </StyledEngineProvider>

    );
}

export default NewHomePage;