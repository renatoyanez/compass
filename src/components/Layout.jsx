import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              COMPASS
            </Typography>
            <Button
              disableRipple
              sx={{
                textTransform: "none",
                backgroundColor: "transparent",
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "white",
                },
              }}
            >
              Register/Sign-in
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
