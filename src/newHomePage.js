import * as React from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


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
import { StyledEngineProvider } from '@mui/material';
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


const RootStyle = styled(Card)(({ theme }) => ({

    boxShadow: "none",
    textAlign: "center",
    padding: "20px, 0px",
    color: "#2ecc71",
    backgroundColor: "rgba(46,204,112,0.2)",
    width: "250px",
    height: "300px"

}));

const IconWrapperStyle = styled('div')(({ theme }) => ({

    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: "50px",
    height: "50px",
    justifyContent: "center",
    marginBottom: "10px",
    color: "#fff",
    backgroundImage: `linear-gradient(135deg, ${alpha("rgba(85,85,85,0.2)", 0)} 0%, ${alpha("rgba(85,85,85,0.2)", 0.24)} 100%)`

}));


const totalSubstances = 0;


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

    const open = Boolean(anchorEl);

    const handleProfileClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {

        setAnchorEl(null);
    }

    return (

        <StyledEngineProvider injectFirst>

            <React.Fragment>
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
                        <IconButton 
                            onClick={handleProfileClick} 
                            size="large" 
                            edge="start"
                            className={classes.iconButtonProfile}
                        >
                            <Avatar className={classes.avatarIcon}>S</Avatar>
                        </IconButton>
                        <IconButton
                            size="large"
                            className={classes.iconButtonNotification}
                        >
                            <svg width="30px" height="30px" fill="none" stroke="#555555" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </IconButton>
                        <a href="/newHomePage" className="navbar-brand">Drug<span className="text-primary">Interactor</span></a>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleProfileClose}
                            onClick={handleProfileClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {

                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {

                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,

                                    },
                                    '&:before': {

                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem className={classes.profileMenuItem}>
                                <Avatar className={classes.profileMenuTopIcons} /> Profile
                            </MenuItem>
                            <MenuItem className={classes.profileMenuItem}>
                                <Avatar className={classes.profileMenuTopIcons}/> My Account
                            </MenuItem>
                            <Divider />
                            <MenuItem className={classes.profileMenuItem}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" className={classes.profileMenuBottomIcons}/>
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem className={classes.profileMenuItem}>
                                <ListItemIcon>
                                    <Settings fontSize="small" className={classes.profileMenuBottomIcons} />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem className={classes.profileMenuItem}>
                                <ListItemIcon>
                                    <Logout fontSize="small" className={classes.profileMenuBottomIcons}/>
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    className={classes.sideDrawer}
                >
                    <Toolbar />
                    <Box className={classes.sideDrawerBox}>    
                        <List>

                            <Link to={"/newHomePage"} className={classes.pageLink}>
                                <ListItem button key={'Home'} className={classes.drawerListItem}>
                                    <ListItemIcon className={classes.drawerListIcon}>
                                        <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    </ListItemIcon>
                                    <ListItemText primary={'Home'}  className={classes.drawerListIconText} />
                                </ListItem>
                            </Link>

                            <Link to={"/getInteractionPair"} className={classes.pageLink}>
                                <ListItem button key={'Interaction Pair Tool'} className={classes.drawerListItem}>
                                    <ListItemIcon className={classes.drawerListIcon}>
                                        <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                    </ListItemIcon>
                                    <ListItemText primary={'Interaction Pair Tool'} className={classes.drawerListIconText} />
                                </ListItem>
                            </Link>

                            <Link to={"/getDrugInteraction"} className={classes.pageLink}>
                                <ListItem button key={'All Interactions Tool'} className={classes.drawerListItem}>
                                    <ListItemIcon className={classes.drawerListIcon}>
                                        <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                    </ListItemIcon>
                                    <ListItemText primary={'All Interactions Tool'} className={classes.drawerListIconText}/>
                                </ListItem>
                            </Link>

                            <Link to={"/AllDrugTerms"} className={classes.pageLink}>
                                <ListItem button key={'All Substances'} className={classes.drawerListItem}>
                                    <ListItemIcon className={classes.drawerListIcon}>
                                        <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                    </ListItemIcon>
                                    <ListItemText primary={'All Substances'} className={classes.drawerListIconText} />
                                </ListItem>
                            </Link>

                            <Link to={"/getRxcuiId"} className={classes.pageLink}>
                                <ListItem button key={'Rxcui ID Finder Tool'} className={classes.drawerListItem}>
                                    <ListItemIcon className={classes.drawerListIcon}>
                                        <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                                    </ListItemIcon>
                                    <ListItemText primary={'Rxcui ID Finder Tool'} className={classes.drawerListIconText} />
                                </ListItem>
                            </Link>

                            <Link to={"/drug3dtest"} className={classes.pageLink}>
                                <ListItem button key={'Molecule View Tool'} className={classes.drawerListItem}>
                                    <ListItemIcon className={classes.drawerListIcon}>
                                        <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    </ListItemIcon>
                                    <ListItemText primary={'Molecule View Tool'} className={classes.drawerListIconText}/>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
                <Box 
                    component="main"
                    sx={{ 
                        flexGrow: 1,
                        width: `calc(100% - ${drawerWidth}px)`,
                        marginLeft: 35,
                    }}
                >
                    <RootStyle>
                        <IconWrapperStyle>
                            <Icon icon="mdi:chemical-weapon" width={24} height={24} />
                        </IconWrapperStyle>
                    </RootStyle>

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
                                    <a href="/InteractionPairPage" className="btn btn-primary">Dive In</a>
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
            </React.Fragment>
        </StyledEngineProvider>

    );
}

export default NewHomePage;