import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Button, Stack } from "@mui/material";

export default function Topbar({ aboutRef, portfolioRef, experienceRef }) {
  const handleTabClick = (arg) => {
    if (arg === 0) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (arg === 1) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack direction="row">
            <Button onClick={() => handleTabClick(0)}>About</Button>
            <Button onClick={() => handleTabClick(1)}>Portfolio</Button>
            <Button onClick={() => handleTabClick(2)}>Work Experience</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
