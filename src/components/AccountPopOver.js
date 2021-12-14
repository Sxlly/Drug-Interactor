import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from '@iconify/react';

import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
import { useRef } from "react";

import account from "./demoAccount";
import MenuPopover from "./MenuPopOver";

import { makeStyles } from "@mui/styles";
import { StyledEngineProvider } from "@mui/material";

//google font imports
import "@fontsource/advent-pro/600.css";
import "@fontsource/public-sans/600.css";


//material ui CSS classes
const useStyles = makeStyles({

    accountText: {

        fontFamily: "Public Sans",
        color: "#555555",
    },

    logoutBtn: {

        color: "#fff",
        backgroundColor: "#2ecc71",
        width: "100px",
        fontFamily: "Public Sans",
    },

    menuItem: {

        typography: "body2",
        px: "1px",
        py: "2.5px",
        "&:hover": {

            color: "#2ecc71",
            transition: "ease-in-out 0.25s",
        },
    },

});

const menuOptions = [

    {
        label: 'Home',
        icon: "fluent:home-12-filled",
        linkTo: '/',
    },
    {
        label: 'Profile',
        icon: "bi:person-badge",
        linkTo: "#",

    },
    {
        label: "Settings",
        icon: "akar-icons:settings-horizontal",
        linkTo: "#"

    },
];


export default function AccountPopover() {

    const classes = useStyles();

    const anchorRef = useRef(null);
    const[open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (

        <StyledEngineProvider injectFirst>
            <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                padding: 0,
                width: 44,
                height: 44,
                ...(open && {
                    '&:before': {
                    zIndex: 1,
                    content: "''",
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                    }
                })
                }}
            >
                <Avatar src={account.photoURL} alt="photoURL" />
            </IconButton>
        
            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{ width: 220 }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                <Typography variant="subtitle1" noWrap className={classes.accountText}>
                    {account.displayName}
                </Typography>
                <Typography variant="body2" noWrap className={classes.accountText}>
                    {account.email}
                </Typography>
                </Box>
        
                <Divider sx={{ my: 1 }} />
        
                {menuOptions.map((option) => (
                <MenuItem
                    key={option.label}
                    to={option.linkTo}
                    component={RouterLink}
                    onClick={handleClose}
                    className={classes.menuItem}
                    /*sx={{ typography: 'body2', py: 1, px: 2.5 }}*/
                >
                    <Box
                    component={Icon}
                    icon={option.icon}
                    sx={{
                        mr: 2,
                        width: 24,
                        height: 24
                    }}
                    />
        
                    {option.label}
                </MenuItem>
                ))}
        
                <Box sx={{ p: 2, pt: 1.5 }}>
                <Button fullWidth variant="outlined" className={classes.logoutBtn}>
                    Logout
                </Button>
                </Box>
            </MenuPopover>
            </>
        </StyledEngineProvider>
      );
}