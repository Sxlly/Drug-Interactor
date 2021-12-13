import * as React from 'react';
import { Link } from "react-router-dom";

//importing iconify icon
import { Icon } from '@iconify/react';


//material ui imports
import { styled } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

//fontsource google font imports
import "@fontsource/public-sans/600.css";


//material ui CSS classes
const useStyles = makeStyles({

    cardValue: {

        alignSelf: "center",
        color: "rgba(37,115,70,1)",
        fontFamily: "Public Sans",

    },

    cardText: {

        alignSelf: "center",
        color: "rgba(37,115,70,1)",
        fontFamily: "Public Sans",
    },

});

const RootStyle = styled(Card)(({ theme }) => ({

    boxShadow: "none",
    textAlign: "center",
    padding: "50px",
    color: "#2ecc71",
    backgroundColor: "rgba(46,204,112,0.5)",
    width: "250px",
    height: "300px"

}));

const IconWrapperStyle = styled('div')(({ theme }) => ({

    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: "100px",
    height: "100px",
    justifyContent: "center",
    marginBottom: "10px",
    color: "rgba(37,115,70,1)",
    backgroundImage: `linear-gradient(135deg, ${alpha("rgba(37,115,70,0.5)", 0)} 0%, ${alpha("rgba(46,204,112,0.5)", 0.24)} 100%)`

}));

export default function YourInteractionsCard() {

    const classes = useStyles();

    return (
        <RootStyle>
            <IconWrapperStyle>
                <Icon icon="fluent:person-swap-16-filled" fontSize="50px" />
            </IconWrapperStyle>
            <Typography variant='h3' className={classes.cardValue}>
                2
            </Typography>
            <Typography variant="subtitle2" className={classes.cardText}>
                Total Interactions Between Your Substances 
            </Typography>
        </RootStyle>
    );
}