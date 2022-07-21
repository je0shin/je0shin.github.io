import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const pages = ["Products", "Pricing", "Blog"];

export default function Topbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters></Toolbar>
      </Container>
    </AppBar>
  );
}
