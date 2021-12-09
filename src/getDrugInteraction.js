import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './getDrugInteractionCSS.css';
import './bootstrap.css';
import './theme.css';
import * as ReactBootStrap from "react-bootstrap";

//Material UI Icon Imports
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

//Material UI Imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';







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

        position: "absolute",
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

        color: "#555555",
        textShadow: "2px 2px rgba(85,85,85,0.15)",
        "&:hover,&:focus": {

            textShadow: "5px 5px rgba(85,85,85,0.20)",
            transition: "ease-in-out 0.25s ",
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
        "&:hover,&:focus": {

            backgroundColor: "#555555",
            transition: "ease-in-out 0.25s ",
            textShadow: "5px 5px rgba(0,0,0,0.25)",
        },
    },

    profileMenuItem: {

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


    }

});


function AllInteractions () {

    //material ui classes constant
    const classes = useStyles();

    //variables using this.state functionality
    const[rxcuiID, updateRxcuiID] = useState("");
    const[nameOne, updateNameOne] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");
    const [interactionLoader, updateInteractionLoader] = useState(true);
    const [rxcuiIDLoader, updateRxcuiIDLoader] = useState(true);
    const [interactionCountLoader, updateInteractionCountLoader] = useState(true);
    const [interactionsList, updateInteractionsList] = useState([]);
    const [interactionCount, updateInteractionCount] = useState(0);
    const [show, updateShow] = useState(false);
    const [image, updateImage] = useState("");
    const [imageLoader, updateImageLoader] = useState(true);
    const [imageAlert, updateImageAlert] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    //profile menu status constant
    const open = Boolean(anchorEl);

    //constant method to handle profile menu onClick
    const handleProfileClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    //constant method to handle profile menu close
    const handleProfileClose = () => {

        setAnchorEl(null);
    };

    //function to update nameOne state 
    function nameChangeOne(enteredName) {
        updateNameOne(enteredName);
    };



    //asynchronus method to get rxcui ID of drug in search bar
    async function getRxcuiIDMethod() {

        const getRxcuiIDAPI = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameOne}&search=${search}`;
        const getRxcuiIDResponse = await fetch(getRxcuiIDAPI)
        const getRxcuiIDData = await getRxcuiIDResponse.json();

        console.log(getRxcuiIDData);

        if (getRxcuiIDData.idGroup.rxnormId !== undefined) {

            console.log(getRxcuiIDData.idGroup.rxnormId[0]);
            updateRxcuiID(getRxcuiIDData.idGroup.rxnormId[0]);
            updateRxcuiIDLoader(true);

            var passableRxcui = getRxcuiIDData.idGroup.rxnormId[0];
            
        }

        else {

            console.log("No matching Rxcui Id!");
            updateRxcuiID("No Match...");
            updateRxcuiIDLoader(true);
            updateShow(true);
            return;
            
        }

        return passableRxcui;
    }

    //asynchronus method to get all interactions of drug in search bar
    async function getInteractionsMethod() {

        var rxcui = await getRxcuiIDMethod();

        if (rxcui !== undefined) {

            const getInteractionsAPI = `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=${source}`;
            const getInteractionsResponse = await fetch(getInteractionsAPI)
            const getInteractionsData = await getInteractionsResponse.json();

            const getStructureAPI = `https://cactus.nci.nih.gov/chemical/structure/${nameOne.toLowerCase()}/image`;
            const getStructureAPIResponse = await fetch(getStructureAPI)
            const getStructureAPIData = await getStructureAPIResponse;
            
            const interactionsArray = [];
            const staticInteractionsList = [];

            console.log(interactionsArray);
            console.log(getInteractionsData);
            console.log(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);
            console.log(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair);

            updateInteractionCount(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);
            updateInteractionCountLoader(true);
            updateImage(getStructureAPIData.url);

            if (getStructureAPIData.ok == false) {

                updateImageAlert(true);
            }

            for (var index = 0; index < getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length-1; index++) {

                interactionsArray[index] = getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair[index];
                staticInteractionsList[index] = interactionsArray[index].interactionConcept[1].minConceptItem.name;
                
            }

            updateInteractionsList(staticInteractionsList);
            updateInteractionLoader(true);
            updateImageLoader(true);


            return;
        }

        else {

            console.log("Did not progress!");
            updateInteractionLoader(true);
            updateImageLoader(true);
            return;
        }
    }

    function interactionClicked() {

        alert("Item Clicked");
    }

    //constant loading all interactions of drug method
    const loadingFunction = () => {

        if (interactionLoader == false) {

            return <ReactBootStrap.Spinner animation="border" style={{ color: "#2ecc71" }}  />;
        }

        else {

            //return interactionsList.map(Interaction => <ReactBootStrap.ListGroup.Item action onClick={interactionClicked} key={Interaction}>{Interaction}</ReactBootStrap.ListGroup.Item>);
            return interactionsList.map(Interaction =>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{Interaction}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Description...</Typography>
                    </AccordionDetails>
                </Accordion>
            );

        }
    }

    const alertMethod = () => {

        if (show == true) {

            return (

                <ReactBootStrap.Alert variant="danger">
                    One or more drug names do not exist within current drug terms records...
                </ReactBootStrap.Alert>

            );
        }
    }

    const structureMethod = () => {

        if (imageAlert == true) {

            return (

                <div className="card-service wow fadeInUp">
                    <div className="header">
                        <ReactBootStrap.Alert variant="danger">
                            Chemical structure image currently does not exist within structure database...
                        </ReactBootStrap.Alert>
                    </div>
                    <div className="body">
                        <h5 className="text-secondary">{nameOne}</h5>
                    </div>
                </div>
            );
        }

        else {

            if (imageLoader == false) {

                return (

                    <div className="card-service wow fadeInUp">
                        <div className="header">
                            <ReactBootStrap.Spinner animation="border" style={{ color: "#2ecc71" }}></ReactBootStrap.Spinner>
                        </div>
                        <div className="body">
                            <h5 className="text-secondary">{nameOne}</h5>
                        </div>
                    </div>
                );
            }

            if (imageLoader == true) {

                return (

                    <div className="card-service wow fadeInUp">
                        <div className="header">
                            <img src={image} alt="" />
                        </div>
                        <div className="body">
                            <h5 className="text-secondary">{nameOne}</h5>
                        </div>
                    </div>


                );
            }
        }
    }

    //constant submit method
    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            updateInteractionLoader(false);
            updateInteractionCountLoader(false);
            updateRxcuiIDLoader(false);
            updateImageLoader(false);
            updateShow(false);

            await getInteractionsMethod();
            console.log("Waited!");

        })();     
        
    }


    //return method
    return (


        <StyledEngineProvider injectFirst>
            <div sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
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
                    <Toolbar />
                                            
                    <div className="page-section">
                        <div className="container">
                            <div className="card-service-large wow fadeInUp">
                                <form  onSubmit={onSubmit}>
                                    <h1 className="rxcui-header">Drug Interactions</h1>
                                    <h2 className="rxcui-subheader">subheader</h2>

                                    <input
                                        className="rxcui-name-input"
                                        id="nameOne"
                                        name="name"
                                        type="text"
                                        placeholder="Enter Drug Name..."
                                        value={nameOne}
                                        onChange={(event) => nameChangeOne(event.target.value)}
                                    />

                                    <button type="submit" className="btn btn-primary">Find</button>

                                    {alertMethod()}

                                    <p className="rxcui-answer">Rxcui ID: { rxcuiIDLoader ? rxcuiID : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color:"#2ecc71" }}/> }</p>

                                    <div className="card-service-large-structures wow fadeInUp">
                                        {structureMethod()}
                                    </div>




                                    <p className="">{nameOne} Interacts With The Following</p>
                                    <p className="">Total Number of Drugs {nameOne} Interacts With: { interactionCountLoader ? interactionCount : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color:"#2ecc71"}}/> }</p>

                                    {loadingFunction()}


                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
        </StyledEngineProvider>

    );


};

export default AllInteractions;