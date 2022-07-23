import React, { useRef } from "react";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ExperienceSection from "./components/ExperienceSection";
import Topbar from "./components/Topbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FDFFFF",
    },
    secondary: {
      main: "#2C3333",
    },
    background: {
      paper: "#FDFFFF",
    },
    text: {
      primary: "#2C3333",
      secondary: "#395B64",
    },
  },
  typography: {
    subtitle2: {
      color: "#395B64",
    },
  },
});

function App() {
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const experienceRef = useRef();

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ backgroundColor: "#FDFFFF" }}>
        <Topbar
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          experienceRef={experienceRef}
        />
        <Box sx={{ maxWidth: "75%", mx: "auto" }}>
          <AboutSection ref={aboutRef} />
          <PortfolioSection ref={portfolioRef} />
          <ExperienceSection ref={experienceRef} />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
