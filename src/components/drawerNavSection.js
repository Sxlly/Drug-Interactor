import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';

import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';


const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
    ({ theme }) => ({
      ...theme.typography.body2,
      height: 48,
      position: 'relative',
      textTransform: 'capitalize',
      paddingLeft: "5px",
      paddingRight: "2.5px",
      color: "#555555",
      '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        display: 'none',
        position: 'absolute',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: "#fff"
      },
    })
  );
  
  const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });


DrawerItem.propTypes = {
    item: PropTypes.object,
    active: PropTypes.func
};

function DrawerItem({ item, active}) {

    const theme = useTheme();
    const isActiveRoot = active(item.path);
    const { title, path, icon, info, children } = item;
    const [open, setOpen] = useState(isActiveRoot);

    const handleOpen = () => {
        setOpen((prev) => !prev);
      };
    
    const activeRootStyle = {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
        bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        '&:before': { display: 'block' }
    };

    const activeSubStyle = {
        color: 'text.primary',
        fontWeight: 'fontWeightMedium'
    };

    if (children) {
        return (
          <>
            <ListItemStyle
              onClick={handleOpen}
              sx={{
                ...(isActiveRoot && activeRootStyle)
              }}
            >
              <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
              <ListItemText disableTypography primary={title} />
              {info && info}
              <Box
                component={Icon}
                icon={open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"}
                sx={{ width: 16, height: 16, ml: 1 }}
              />
            </ListItemStyle>
    
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {children.map((item) => {
                  const { title, path } = item;
                  const isActiveSub = active(path);
    
                  return (
                    <ListItemStyle
                      key={title}
                      component={RouterLink}
                      to={path}
                      sx={{
                        ...(isActiveSub && activeSubStyle)
                      }}
                    >
                      <ListItemIconStyle>
                        <Box
                          component="span"
                          sx={{
                            width: 4,
                            height: 4,
                            display: 'flex',
                            borderRadius: '50%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'text.disabled',
                            transition: (theme) => theme.transitions.create('transform'),
                            ...(isActiveSub && {
                              transform: 'scale(2)',
                              bgcolor: 'primary.main'
                            })
                          }}
                        />
                      </ListItemIconStyle>
                      <ListItemText disableTypography primary={title} />
                    </ListItemStyle>
                  );
                })}
              </List>
            </Collapse>
          </>
        );
    }

    return (
        <ListItemStyle
          component={RouterLink}
          to={path}
          sx={{
            ...(isActiveRoot && activeRootStyle)
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
        </ListItemStyle>
    );
}

DrawerSection.propTypes = {
    navConfig: PropTypes.array
};


export default function DrawerSection({ navConfig, ...other }) {
    const { pathname } = useLocation();
    const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  
    return (
      <Box {...other}>
        <List disablePadding>
          {navConfig.map((item) => (
            <DrawerItem key={item.title} item={item} active={match} />
          ))}
        </List>
      </Box>
    );
}