import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { useAuth } from '../../Utilities/authProvider';

export default function MyNavbar() {

  const {isLoggedIn, actions} = useAuth()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}

          <Button sx={{ flexGrow: 1 }} variant="outline" to="/Job-Listing" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Job Listings
          </Button>

          <Button sx={{ flexGrow: 1 }} variant="outline" to="/user-favorited-page" 
            component={NavLink} 
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Favorited Jobs
            </Button> 

          <Button variant="outline" to="/company-showcase" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Campanies
          </Button>

          <Button variant="outline" to="/contact" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Contact
          </Button>

          <Button variant="outline" to="/about" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            About
          </Button>

          {/* Log in/log out button depending on loggeds in status */}
          {
            isLoggedIn ? <Button variant="outline" 
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} onClick={actions.logUserOut}>
              Log Out
            </Button> : <Button variant="outline" to="/Home" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Log In
          </Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}