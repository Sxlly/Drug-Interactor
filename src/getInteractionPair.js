import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import './bootstrap.css';
import './theme.css';
import * as ReactBootStrap from "react-bootstrap";

//Material UI Icon Imports

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

//Material UI Imports
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import { StyledEngineProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia, Grid, Menu, MenuItem, Tooltip } from '@mui/material';


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


const ExpandMore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({

    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




//default exporting method => to web screen **renders**
function InteractionPairPage () {

    //material makeStyles => CSS classes constant
    const classes = useStyles();


    //variables using React useState functionality
    const[rxcuiIDOne, updateRxcuiIDOne] = useState("");
    const[rxcuiIDTwo, updateRxcuiIDTwo] = useState("");
    const[nameOne, updateNameOne] = useState("");
    const[nameTwo, updateNameTwo] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");
    const[interactionResultLoader, updateInteractionResultLoader] = useState(true);
    const[interactionDescLoader, updateInteractionDescLoader] = useState(true);
    const[rxcuiIDOneLoader, updateRxcuiIDOneLoader] = useState(true);
    const[rxcuiIDTwoLoader, updateRxcuiIDTwoLoader] = useState(true);
    const[interationCount, updateInteractionCount] = useState(0);
    const[interactionResult, updateInteractionResult] = useState("");
    const[interactionsList, updateInteractionsList] = useState([]);
    const[interactionDescription, updateInteractionDescription] = useState("");
    const[show, updateShow] = useState(false);
    const[imageOneAlert, updateImageOneAlert] = useState(false);
    const[imageTwoAlert, updateImageTwoAlert] = useState(false);
    const[imageOne, updateImageOne] = useState("");
    const[imageTwo, updateImageTwo] = useState("");
    const[imageOneLoader, updateImageOneLoader] = useState(true);
    const[imageTwoLoader, updateImageTwoLoader] = useState(true);
    const[panelReady, updatePanelReady] = useState(false);
    const[interactIconState, updateInteractIconState] = useState(false);
    const[panelStart, updatePanelStart] = useState(false);
    const[interactionOutcomeState, updateInteractionOutcomeState] = useState(false);
    const[interactionOutcomeReady, updateInteractionOutcomeReady] = useState(false);
    const[expanded, updateExpanded] = useState(false);
    const[anchorEl, setAnchorEl] = useState(null);

    //drawer constant open method
    const open = Boolean(anchorEl);

    //constant method to handle profile avatar => onClick()
    const handleProfileClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    //constant method to handle profile avatar => onClose()
    const handleProfileClose = () => {

        setAnchorEl(null);
    };


    //function to update nameOne state
    function nameChangeOne(enteredName) {
        updateNameOne(enteredName);
    };

    //function to update nameTwo state
    function nameChangeTwo(enteredName) {
        updateNameTwo(enteredName);
    };

    //asynchronus method to get rxcui Id of drugs One and Two
    async function getRxcuiIdMethod() {

        const getRxcuiIDAPIOne = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameOne}&search=${search}`;
        const getRxcuiIDAPIOneResponse = await fetch(getRxcuiIDAPIOne)
        const getRxcuiIDAPIOneData = await getRxcuiIDAPIOneResponse.json();

        console.log(getRxcuiIDAPIOneData);

        const getRxcuiIDAPITwo = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameTwo}&search=${search}`;
        const getRxcuiIDAPITwoResponse = await fetch(getRxcuiIDAPITwo)
        const getRxcuiIDAPITwoData = await getRxcuiIDAPITwoResponse.json();

        console.log(getRxcuiIDAPITwoData);

        if (getRxcuiIDAPIOneData.idGroup.rxnormId && getRxcuiIDAPITwoData.idGroup.rxnormId !== undefined) {

            var passableRxcuiOne = getRxcuiIDAPIOneData.idGroup.rxnormId[0];
            var passableRxcuiTwo = getRxcuiIDAPITwoData.idGroup.rxnormId[0];
            var passableNameOne = getRxcuiIDAPIOneData.idGroup.name.toLowerCase();
            var passableNameTwo = getRxcuiIDAPITwoData.idGroup.name.toLowerCase();
            updateRxcuiIDOne(passableRxcuiOne);
            updateRxcuiIDTwo(passableRxcuiTwo);
            updateRxcuiIDOneLoader(true);
            updateRxcuiIDTwoLoader(true);
        }

        else if (getRxcuiIDAPIOneData.idGroup.rxnormId || getRxcuiIDAPITwoData.idGroup.rxnormId !== undefined) {

            console.log("1/2 No Matching Rxcui ID...")
            
            if (getRxcuiIDAPIOneData.idGroup.rxnormId !== undefined) {

                updateRxcuiIDOne(getRxcuiIDAPIOneData.idGroup.rxnormId[0]);
                updateRxcuiIDTwo("No Match...");
                updateRxcuiIDOneLoader(true);
                updateRxcuiIDTwoLoader(true);
                updateShow(true);

            }

            else {

                updateRxcuiIDTwo(getRxcuiIDAPITwoData.idGroup.rxnormId[0]);
                updateRxcuiIDOne("No Match...");
                updateRxcuiIDOneLoader(true);
                updateRxcuiIDTwoLoader(true);
                updateShow(true);

            }

            var passableRxcuiOne = null;
            var passableRxcuiTwo = null;
            var passableNameOne = null;
            var passableNameTwo = null;

            
        }

        else {

            
            console.log("No matching Rxcui Id!");
            updateRxcuiIDOne("No Match...");
            updateRxcuiIDTwo("No Match...");
            updateRxcuiIDOneLoader(true);
            updateRxcuiIDTwoLoader(true);
            updateShow(true);
            alert("Both drugs do not exist within database records...");
            var passableRxcuiOne = null;
            var passableRxcuiTwo = null;
            var passableNameOne = null;
            var passableNameTwo = null;
        }

        return {
            passableRxcuiOne: passableRxcuiOne,
            passableRxcuiTwo: passableRxcuiTwo,
            passableNameOne: passableNameOne,
            passableNameTwo: passableNameTwo
        };

    }

    //asynchronus method to get determine if pair of substaces interact
    async function getInteractionMethod() {

        var rxcui = await getRxcuiIdMethod();
        var rxcuiOne = rxcui.passableRxcuiOne;
        var rxcuiTwo = rxcui.passableRxcuiTwo;
        var drugNameOne = rxcui.passableNameOne;
        var drugNameTwo = rxcui.passableNameTwo;

        if (rxcuiOne && rxcuiTwo !== null) {

            const getInteractionsAPI = `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcuiOne}&sources=${source}`;
            const getInteractionsResponse = await fetch(getInteractionsAPI)
            const getInteractionsData = await getInteractionsResponse.json();

            console.log(getInteractionsData);

            const getStructureOneAPI = `https://cactus.nci.nih.gov/chemical/structure/${drugNameOne}/image`;
            const getStructureOneAPIResponse = await fetch(getStructureOneAPI)
            const getStructureOneAPIData = await getStructureOneAPIResponse;

            console.log(getStructureOneAPIData);
            updateImageOne(getStructureOneAPIData.url);

            const getStructureTwoAPI = `https://cactus.nci.nih.gov/chemical/structure/${drugNameTwo}/image`;
            const getStructureTwoAPIResponse = await fetch(getStructureTwoAPI)
            const getStructureTwoAPIData = await getStructureTwoAPIResponse;

            console.log(getStructureTwoAPIData);
            updateImageTwo(getStructureTwoAPIData.url);


            const interactionsArray = [];
            const staticInteractionsList = [];

            updateInteractionCount(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);

            if (getStructureOneAPIData.ok == false) {

                updateImageOneAlert(true);
            }

            if (getStructureTwoAPIData.ok == false) {

                updateImageTwoAlert(true);
            }


            for (var index = 0; index < getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length-1; index++) {

                interactionsArray[index] = getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair[index];
                staticInteractionsList[index] = interactionsArray[index].interactionConcept[1].minConceptItem.name;
                
                var leadInteractionName = interactionsArray[index].interactionConcept[0].minConceptItem.name;
                var leadInteractionRxcui = interactionsArray[index].interactionConcept[0].minConceptItem.rxcui;
                var altInteractionName = interactionsArray[index].interactionConcept[1].minConceptItem.name;
                var altInteractionRxcui = interactionsArray[index].interactionConcept[1].minConceptItem.rxcui;
                var interactionDesc = interactionsArray[index].description;


                console.log("Lead Name: " + leadInteractionName);
                console.log("Lead Rxcui: " + leadInteractionRxcui);
                console.log("Alt Name: " + altInteractionName);
                console.log("Alt Rxcui: " + altInteractionRxcui);
                console.log("Description: " + interactionDesc);

                if (altInteractionName == drugNameTwo) {

                    updateInteractionResult("Yes!");
                    updateInteractionsList(staticInteractionsList);
                    updateInteractionDescription(interactionDesc);
                    updateInteractionResultLoader(true);
                    updateInteractionDescLoader(true);
                    updateImageOneLoader(true);
                    updateImageTwoLoader(true);
                    updateInteractIconState(true);
                    updatePanelReady(true);
                    updateInteractionOutcomeState(true);
                    updateInteractionOutcomeReady(true);
                    return;
                }

                if (altInteractionRxcui == rxcuiTwo) {

                    updateInteractionResult("Yes!");
                    updateInteractionsList(staticInteractionsList);
                    updateInteractionDescription(interactionDesc);
                    updateInteractionResultLoader(true);
                    updateInteractionDescLoader(true);
                    updateImageOneLoader(true);
                    updateImageTwoLoader(true);
                    updateInteractIconState(true);
                    updatePanelReady(true);
                    updateInteractionOutcomeState(true);
                    updateInteractionOutcomeReady(true);
                    return;
                }

                else {

                    updateInteractionResult("No!");
                    updateInteractionDescription("None...");
                    updateInteractionResultLoader(true);
                    updateInteractionDescLoader(true);
                    updateImageOneLoader(true);
                    updateImageTwoLoader(true);
                    updateInteractIconState(false);
                    updatePanelReady(true);
                    updateInteractionOutcomeState(false);
                    updateInteractionOutcomeReady(true);
                }

                
            }

            updateInteractionsList(staticInteractionsList);
            return;
        }
        else {

            console.log("Did not progress!");
            return;
        }     
    }

    const handleExpandClick = () => {

        updateExpanded(!expanded);
    };


    const alertMethod = () => {

        if (show == true) {

            return (

                <Alert variant="filled" severity="error">
                    One or more drug names do not exist within current drug terms records...
                </Alert>

            );

        }
    }

    const structureMethodOne = () => {


        if (imageOneAlert == true) {

            return (

                <div className="card-service wow fadeInUp">
                    <div className="header">
                        <Alert variant="filled" severity="error">
                            Chemical structure image currently does not exist within structure database...
                        </Alert>
                    </div>
                    <div className="body">
                        <h5 className="text-secondary">{nameOne}</h5>
                    </div>
                </div>
            );
        }

        else {

            if (imageOneLoader == false) {

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

            if (imageOneLoader == true) {

                return (

                    <div className="card-service wow fadeInUp">
                        <div className="header">
                            <img src={imageOne} alt="" />
                        </div>
                        <div className="body">
                            <h5 className="text-secondary">{nameOne}</h5>
                        </div>
                    </div>
                );
            }
        }
    }

    const structureMethodTwo = () => {



        if (imageTwoAlert == true) {

            return (

                <div className="card-service wow fadeInUp">
                    <div className="header">
                        <Alert variant="filled" severity="error">
                            Chemical structure image currently does not exist within structure database...
                        </Alert>
                    </div>
                    <div className="body">
                        <h5 className="text-secondary">{nameTwo}</h5>
                    </div>
                </div>
            );


        }

        else {

            if (imageTwoLoader == false) {

                return (

                    <div className="card-service wow fadeInUp">
                        <div className="header">
                            <ReactBootStrap.Spinner animation="border" style={{ color: "#2ecc71" }}></ReactBootStrap.Spinner>
                        </div>
                        <div className="body">
                            <h5 className="text-secondary">{nameTwo}</h5>
                        </div>
                    </div>
                );
            }

            if (imageTwoLoader == true) {

                return (

                    <div className="card-service wow fadeInUp">
                        <div className="header">
                            <img src={imageTwo} alt="" />
                        </div>
                        <div className="body">
                            <h5 className="text-secondary">{nameTwo}</h5>
                        </div>
                    </div>

                );
            }
        }
    }

    const interactionPanel = () => {

        if (panelStart == true) {

            if (panelReady == true) {

                if (interactIconState == true) {

                    return (

                        <div className="card-service-large wow fadeInUp">
                            <div className="interaction_result_card_div">
                                <h3 className="interaction-panel-text">{nameOne}</h3>
                                <SwapCallsIcon style={{color: "#2ecc71", fontSize: 75}} />
                                <h3></h3>
                                <h3 className="interaction-panel-text">{nameTwo}</h3>
                            </div>
                        </div>

                    );
                }

                if (interactIconState == false) {

                    return (

                        <div className="card-service-large wow fadeInUp">
                            <div className="interaction_result_card_div">
                                <h3 className="text-secondary">{nameOne}</h3>
                                <SwapCallsIcon style={{color: "#cc0000", fontSize: 75}} />
                                <h3></h3>
                                <h3 className="text-secondary">{nameTwo}</h3>
                            </div>
                        </div>
                    )


                }
            }

            else {

                return (

                    <div className="card-service-large wow fadeInUp">
                        <LinearProgress color="success" />
                    </div>
                );

            }
        }

        else {

            return (

                <div></div>

            );

        }
    }

    const interactionOutcomeAlert = () => {

        if (interactionOutcomeReady == true) {

            if (interactionOutcomeState == true) {

                return (

                    <Alert onClose={() => {}}>Yes! There is an Interaction</Alert>


                );

            }

            if (interactionOutcomeState == false) {

                return (

                    <Alert severity="error" onClose={() => {}}>No! There is no Interaction</Alert>

                );
            }
        }

        else {

            return (

                <div></div>
            );
        }


    }




    //constant submit method
    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            updateInteractionResultLoader(false);
            updateInteractionDescLoader(false);
            updateRxcuiIDOneLoader(false);
            updateRxcuiIDTwoLoader(false);
            updateShow(false);
            updateImageOneLoader(false);
            updateImageTwoLoader(false);
            updatePanelStart(true);
            updatePanelReady(false);
            updateInteractionOutcomeReady(false);


            await getInteractionMethod();
            console.log("Waited!");

        })();
    }


    //return method
    return (

        <StyledEngineProvider injectFirst>

            <div sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

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
                    <Container maxWidth="lg" sx={{
                        paddingTop: (theme) => theme.spacing(4),
                        paddingBottom: (theme) => theme.spacing(4),
                    }}>

                    <div className="page-section">
                        <div className="container">
                            <div className="card-service-large wow fadeInUp">


                                <form onSubmit={onSubmit}>
                                    <h1 className="rxcui-header">Interaction Pair</h1>
                                    <h2 className="rxcui-subheader">Determine if two substances react</h2>

                                    <input
                                        className="rxcui-name-input"
                                        id="nameOne"
                                        name="name"
                                        type="text"
                                        placeholder="Enter Drug Name..."
                                        value={nameOne}
                                        onChange={(event) => nameChangeOne(event.target.value)}
                                    />

                                    <input
                                        className="rxcui-name-input"
                                        id="nameTwo"
                                        name="nameTwo"
                                        type="text"
                                        placeholder="Enter Drug Name..."
                                        value={nameTwo}
                                        onChange={(event) => nameChangeTwo(event.target.value)}
                                    />

                                    <button type="submit" className="btn btn-primary">Test</button>


                                    <div className="card-service-large wow fadeInUp">

                                        {alertMethod()}
                                        {interactionPanel()}
                                        {interactionOutcomeAlert()}

                                        <Divider style={{ fontSize: 20, padding: "20px"}}></Divider>

                                        <Card sx={{ maxWidth: 700 }}>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <Typography>
                                                        Interaction: {interactionResultLoader ? interactionResult : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color: "#2ecc71" }} />}
                                                    </Typography>
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    <ShareIcon />
                                                </IconButton>
                                                <ExpandMore
                                                    expand={expanded}
                                                    onClick={handleExpandClick}
                                                    aria-expanded={expanded}
                                                    aria-label="show more"
                                                >
                                                    <ExpandMoreIcon />
                                                </ExpandMore>
                                            </CardActions>
                                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Typography paragraph>
                                                        Description: {interactionDescLoader ? interactionDescription : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color: "#2ecc71" }} />}
                                                    </Typography>
                                                    <Button size="small">Learn More</Button>
                                                    <Divider style={{ fontSize: 20, padding: "20px" }}></Divider>
                                                    <Alert severity="warning" variant="outlined">
                                                        <AlertTitle>Warning</AlertTitle>
                                                        Please consult a <strong>health professional</strong> before taking any two substances at once
                                                    </Alert>
                                                </CardContent>
                                            </Collapse>
                                        </Card>

                                        <Divider style={{ fontSize: 20, padding: "20px"}}>Chemical Structures</Divider>
                                        

                                        <div className="card-service-large-structures wow fadeInUp">

                                        

                                            {structureMethodOne()}
                                            {structureMethodTwo()}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </Container>
                </Box>  
            </div>
        </StyledEngineProvider>

    );
}

export default InteractionPairPage;