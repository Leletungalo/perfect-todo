import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h4">My perfect</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
