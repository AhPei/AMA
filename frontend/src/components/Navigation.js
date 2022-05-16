import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import TemporaryDrawer from "./Drawer";
import "./style/Navigation.scss";

import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appBar">
        <Toolbar>
          <TemporaryDrawer />
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink className="navbar-brand" to="/">
              MARK IT
            </NavLink>
          </Typography>
          <NavLink className="navbar-brand" to="/signin">
            <SupervisedUserCircleIcon className="icon" />
            Login
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
