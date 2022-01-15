import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './getDrugInteractionCSS.css';
import './bootstrap.css';
import './theme.css';
import * as ReactBootStrap from "react-bootstrap";

//importing self made components
import AppBarSearch from './components/appBarSearch';
import AccountPopover from './components/AccountPopOver';
import DashboardSidebar from './components/Sidebar';

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
import { TextField } from "@mui/material";
import { Stack, StyledEngineProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';


//google font imports
import "@fontsource/advent-pro/600.css";
import "@fontsource/public-sans/600.css";




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


    },

    drugInteractionTitle: {

        color: "#555555",
        fontSize: "32px",
        fontFamily: "Public Sans",


    },

    drugInteractionSubTitle: {

        color: "#555555",
        fontSize: "20px",
        fontFamily: "Public Sans",
    },

    inputFieldStyle: {

        display: "block",
        margin: "20px auto",
        textAlign: "center",
        padding: "14px 10px",
        width: "250px",

        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#555555"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(46, 204, 112, 0.5)"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(46, 204, 112, 1)"
        },

        "& label": {
            fontFamily: "Public Sans",
            width: "100%",
            padding: "10px",
            textAlign: "center",
            transformOrigin: "center",
            color: "rgba(85, 85, 85, 0.5)",
            "&.Mui-focused": {
                textAlign: "left",
                padding: "0px",
                color: "#2ecc71",
            }
        },

    },

    inputTextStyle: {

        fontFamily: "Public Sans",
    },

    rxcuiAnswer: {

        fontSize: "12px",
        fontFamily: "Public Sans",
        color: "#555555",
        cursor: "pointer",
        borderRadius: "24px",
        margin: "10px",
        padding: "10px",
    },

    listParagraphs: {

        fontFamily: "Public Sans",
        color: "#555555",


    },

    listDrugName: {

        fontFamily: "Public Sans",
        color: "#555555",
        "&:hover,&:focus": {

            color: "#2ecc71",
            transition: "ease-in-out 0.25s",
            textShadow: "5px 5px 2px rgba(85,85,85,0.45)",
        },

    },

    listDrugDescription: {

        color: "#555555",
        fontFamily: "Public Sans",
    },

    moleculeStructureText: {

        fontFamily: "Public Sans",
        color: "#555555",
    },

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
    const [officialChemicalName, updateOfficialChemicalName] = useState("");


    //constant method to update value of nameOne => onChange()
    const nameChangeOne = event => {
        updateNameOne(event.target.value);
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
            var altPassableRxcui = getRxcuiIDData.idGroup.rxnormId[1];
            var NameOnePassable = getRxcuiIDData.idGroup.name.toLowerCase();
            
        }

        else {

            console.log("No matching Rxcui Id!");
            updateRxcuiID("No Match...");
            updateRxcuiIDLoader(true);
            updateShow(true);
            var passableRxcui = null;
            var altPassableRxcui = null;
            var NameOnePassable = null;
            
            
            
        }

        return {

            passableRxcuiMain: passableRxcui,
            passableRxcuiAlt: altPassableRxcui,
            passableNameOne: NameOnePassable,

        };
    }

    //asynchronus method to get all interactions of drug in search bar
    async function getInteractionsMethod() {

        var rxcui = await getRxcuiIDMethod();
        var mainRxcui = rxcui.passableRxcuiMain;
        var altRxcui = rxcui.passableRxcuiAlt;
        var drugName = rxcui.passableNameOne;

        if (mainRxcui && drugName !== undefined) {

            const getInteractionsAPI = `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${mainRxcui}&sources=${source}`;
            const getInteractionsResponse = await fetch(getInteractionsAPI)
            var getInteractionsData = await getInteractionsResponse.json();
            
            const getStructureAPI = `https://cactus.nci.nih.gov/chemical/structure/${drugName}/image`;
            const getStructureAPIResponse = await fetch(getStructureAPI)
            const getStructureAPIData = await getStructureAPIResponse;

            console.log(getStructureAPIData);
            updateImage(getStructureAPIData.url);
            
            const interactionsArray = [];
            const staticInteractionsList = [];

            updateInteractionCount(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);
            updateInteractionCountLoader(true);

            if (getStructureAPIData.ok == false) {

                console.log("Molecule Structure Not Found...");
                updateImageAlert(true);
            }

            for (var index = 0; index < getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length-1; index++) {

                interactionsArray[index] = getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair[index];
                staticInteractionsList[index] = [interactionsArray[index].interactionConcept[1].minConceptItem.name, interactionsArray[index].description];
                
            }

            updateInteractionsList(staticInteractionsList);
            updateOfficialChemicalName(interactionsArray[0].interactionConcept[0].minConceptItem.name);
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
                        <Typography className={classes.listDrugName}>{Interaction[0]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.listDrugDescription}>Description: {Interaction[1]}</Typography>
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
                        <h5 className={classes.moleculeStructureText}>{nameOne}</h5>
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
                            <h5 className={classes.moleculeStructureText}>{nameOne}</h5>
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
                            <h5 className={classes.moleculeStructureText}>{nameOne}</h5>
                            <Typography>{officialChemicalName}</Typography>
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

            updateOfficialChemicalName("");
            updateInteractionLoader(false);
            updateInteractionCountLoader(false);
            updateRxcuiIDLoader(false);
            updateImageLoader(false);
            updateShow(false);

            console.log(nameOne);

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
                                            
                    <div className="page-section">
                        <div className="container">
                            <div className="card-service-large wow fadeInUp">
                                <form  onSubmit={onSubmit}>
                                    <h1 className={classes.drugInteractionTitle}>Drug Interactions</h1>
                                    <h2 className={classes.drugInteractionSubTitle}>Find all substances the entered substance name interacts with</h2>

                                    <TextField
                                        className={classes.inputFieldStyle}
                                        InputProps={{
                                            classes: {
                                                input: classes.inputTextStyle,
                                            },
                                        }}
                                        label="Enter Drug Name..."
                                        value={nameOne}
                                        onChange={nameChangeOne}
                                    />

                                    <Button type="submit" className={classes.toolCardBtn}>Find</Button>

                                    {alertMethod()}

                                    <p className={classes.rxcuiAnswer}>Rxcui ID: { rxcuiIDLoader ? rxcuiID : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color:"#2ecc71" }}/> }</p>

                                    <div className="card-service-large-structures wow fadeInUp">
                                        {structureMethod()}
                                    </div>




                                    <p className={classes.listParagraphs}>{nameOne} Interacts With The Following</p>
                                    <p className={classes.listParagraphs}>Total Number of Drugs {nameOne} Interacts With: { interactionCountLoader ? interactionCount : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color:"#2ecc71"}}/> }</p>

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