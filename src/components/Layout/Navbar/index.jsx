/** @format */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense' sx={{ justifyContent: "flex-end" }}>
          <Badge badgeContent={4} color='primary'>
            <MailIcon color='action' />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
