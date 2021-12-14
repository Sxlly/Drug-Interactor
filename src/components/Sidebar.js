import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';

import Scrollbar from './DrawerScrollBar';
import DrawerSection from './drawerNavSection';
import { MHidden } from './@material-extend';


import drawerConfig from './drawerConfig';
import account from './demoAccount';


const drawerWidth = 240;

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: drawerWidth,
    }
  }));
  
  const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: "2px 2.5px",
    borderRadius: "30px",
    backgroundColor: "rgba(85,85,85,0.25)",
  }));

DashboardSidebar.propTypes = {
    isOpenSidebar: PropTypes.bool,
    onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
    const { pathname } = useLocation();
  
    useEffect(() => {
      if (isOpenSidebar) {
        onCloseSidebar();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
  
    const renderContent = (
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
        }}
      >
        <Box sx={{ px: 2.5, py: 3 }}>
          <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
            <h1>DI</h1>
          </Box>
        </Box>
  
        <Box sx={{ mb: 5, mx: 2.5 }}>
          <Link underline="none" component={RouterLink} to="#">
            <AccountStyle>
              <Avatar src={account.photoURL} alt="photoURL" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                  {account.displayName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {account.role}
                </Typography>
              </Box>
            </AccountStyle>
          </Link>
        </Box>
  
        <DrawerSection navConfig={drawerConfig} />
  
        <Box sx={{ flexGrow: 1 }} />
  

      </Scrollbar>
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