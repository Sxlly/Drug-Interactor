import * as React from "react";
import { Link } from "react-router-dom";

import { Icon } from '@iconify/react';
import { useState } from 'react';

// material
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
  IconButton
} from '@mui/material';


const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_DESKTOP,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: "0px 15px",
  boxShadow: "0px 10px 5px rgba(85,85,85,0.4)",
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));


export default function AppBarSearch() {

    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            {!isOpen && (
              <IconButton onClick={handleOpen} sx={{ color: "rgba(37,115,70,1)" }}>
                <Icon icon="akar-icons:search" width={25} height={25} />
              </IconButton>
            )}
    
            <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
              <SearchbarStyle>
                <Input
                  autoFocus
                  fullWidth
                  disableUnderline
                  placeholder="Search…"
                  startAdornment={
                    <InputAdornment position="start">
                      <Box
                        component={Icon}
                        icon="akar-icons:search"
                        sx={{ color: "rgba(37,115,70,1)" , width: 20, height: 20 }}
                      />
                    </InputAdornment>
                  }
                  sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
                />
                <Button sx={{ 
                  backgroundColor: "#2ecc71" 
                  }} 
                  variant="contained" 
                  onClick={handleClose}>
                  Search
                </Button>
              </SearchbarStyle>
            </Slide>
          </div>
        </ClickAwayListener>
    );

    
}