import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Divider, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { GoogleButton } from "react-google-button";
import Button from "@mui/material/Button";

function Navbar() {
  const { logOut, user, googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              navigate("/");
            }}
          >
            Track Checker
          </Typography>
          {user ? (
            <div>
              <Tooltip title="Open settings">
                <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                keepMounted
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/account");
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    logOut();
                    handleClose();
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            // <GoogleButton style={{ margin: "10px 0 10px 0" }} onClick={handleGoogleSignIn} />
            <Button onClick={googleSignIn} color="inherit">
              Sign in with Google
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
