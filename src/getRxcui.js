import React, { Component, useState } from "react";
import PropTypes from "prop-types";
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


//Material UI Imports
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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

function GetRxcuiID () {

    const classes = useStyles();

    const [rxcuiIDLoader, updateRxcuiIDLoader] = useState(true);
    const [rxcuiID, updateRxcuiID] = useState(null);
    const [name, updateName] = useState("");
    const [search, updateSearch] = useState(1);
    const [show, updateShow] = useState(false);

    const nameChange = event => {
        updateName(event.target.value);
    };

    async function getRxcuiIDCall() {

        const getRxcuiIDCallAPI = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${name}&search=${search}`;
        const getRxcuiIDCallResponse = await fetch(getRxcuiIDCallAPI)
        const getRxcuiIDCallData = await getRxcuiIDCallResponse.json();

        console.log(getRxcuiIDCallData);

        if (getRxcuiIDCallData.idGroup.rxnormId !== undefined) {

            updateRxcuiID(getRxcuiIDCallData.idGroup.rxnormId[0]);
            updateRxcuiIDLoader(true);
        }

        else {

            console.log("No matching Rxcui Id!");

            updateRxcuiID("No Match...");
            updateRxcuiIDLoader(true);
            updateShow(true);
        }

        return;
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

    const onSubmit = event => {

        event.preventDefault();
        updateRxcuiIDLoader(false);
        updateShow(false);

        (async () => {

            await getRxcuiIDCall();
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
                                <form onSubmit={onSubmit}>
                                    <h1 className="rxcui-header">Find Rxcui ID</h1>
                                    <h2 className="rxcui-subheader">Enter drug name below</h2>

                                    <TextField
                                        className={classes.inputFieldStyle}
                                        InputProps={{
                                            classes: {
                                                input: classes.inputTextStyle,
                                            },

                                        }}
                                        label="Enter Drug Name..."
                                        value={name}
                                        onChange={nameChange}
                                    />

                                    <Button type="submit" className={classes.toolCardBtn}>Find</Button>

                                    <div className="rxcui-answer-div">
                                        {alertMethod()}
                                        <p className="rxcui-answer">Rxcui ID: {rxcuiIDLoader ? rxcuiID : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color: "#2ecc71" }}/>}</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
 
            </div>
        </StyledEngineProvider>
    )

}

export default GetRxcuiID;
