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
import { Stack, StyledEngineProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia, Grid, Menu, MenuItem, Tooltip } from '@mui/material';
import AppBarSearch from "./components/appBarSearch";
import AccountPopover from "./components/AccountPopOver";
import DashboardSidebar from "./components/Sidebar";


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