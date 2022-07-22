import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import AboutSection from "./components/AboutSection";
import Portfolio from "./components/PortfolioSection";
import Topbar from "./components/Topbar";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#E33E7F",
    },
    background: {
      paper: "#EFEFEF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ backgroundColor: "#EFEFEF" }}>
        {/* <Topbar /> */}
        <Box sx={{ maxWidth: "75%", mx: "auto" }}>
          <AboutSection />
          <Portfolio />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
