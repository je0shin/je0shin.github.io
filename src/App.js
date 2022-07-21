import { Box } from "@mui/system";
import "./App.css";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Topbar from "./components/Topbar";
function App() {
  return (
    <div className="App">
      {/* <Topbar /> */}
      <Box sx={{ maxWidth: "75%", mx: "auto" }}>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </Box>
    </div>
  );
}

export default App;
