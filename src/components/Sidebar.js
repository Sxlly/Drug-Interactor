import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { StyledEngineProvider } from '@mui/material';

import Scrollbar from './DrawerScrollBar';
import DrawerSection from './drawerNavSection';
import { MHidden } from './@material-extend';


import drawerConfig from './drawerConfig';
import account from './demoAccount';

//google font imports
import "@fontsource/advent-pro/600.css";
import "@fontsource/public-sans/600.css";


const drawerWidth = 240;

//material ui CSS classes
const useStyles = makeStyles({

    accountText: {

        fontFamily: "Public Sans",
        textShadow: "5px 5px 5px rgba(85,85,85,0.2)",
        color: "#555555",
        "&:hover,&:focus": {

            transition: "ease-in-out 0.25s",
            textShadow: "5px 5px 5px rgba(85,85,85,0.5)",
            fontSize: "17.5px",
        },
    },

    pageLink: {

        textDecoration: "none",
        "&:focus,&:hover": {

            textDecoration: "none",
        },

    },
});

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: drawerWidth,
    }
  }));
  
  const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: "20px 25px",
    borderRadius: "30px",
    backgroundColor: "rgba(85,85,85,0.2)",
    textDecoration: "none",
  }));

DashboardSidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
    const { pathname } = useLocation();
    const classes = useStyles();
  
    useEffect(() => {
      if (isOpenSidebar) {
        onCloseSidebar();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
  
    const renderContent = (
        
        <StyledEngineProvider injectFirst>
            <Scrollbar
                sx={{
                height: '100%',
                '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
                }}
            >
                <Box sx={{ px: 2.5, py: 3 }}>
                    <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
                        <img src="https://www.svgrepo.com/show/65713/pills.svg" width="60px" height="60px" alt="DI" />
                    </Box>
                </Box>
        
                <Box sx={{ mb: 5, mx: 2.5 }}>
                <Link className={classes.pageLink} component={RouterLink} to="#">
                    <AccountStyle>
                    <Avatar src={account.photoURL} alt="photoURL" />
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle2" className={classes.accountText} >
                        {account.displayName}
                        </Typography>
                        <Typography variant="body2" className={classes.accountText}>
                        {account.role}
                        </Typography>
                    </Box>
                    </AccountStyle>
                </Link>
                </Box>
        
                <DrawerSection navConfig={drawerConfig} />
        
                <Box sx={{ flexGrow: 1 }} />
        

            </Scrollbar>
        </StyledEngineProvider>
    );
  
    return (
      <RootStyle>
          <Drawer
            open={isOpenSidebar}
            onClose={onCloseSidebar}
            PaperProps={{
              sx: { width: drawerWidth }
            }}
          >
            {renderContent}
          </Drawer>

  
          <Drawer
            open
            variant="persistent"
            PaperProps={{
              sx: {
                width: drawerWidth,
                bgcolor: 'background.default'
              }
            }}
          >
            {renderContent}
          </Drawer>
      </RootStyle>
    );
}