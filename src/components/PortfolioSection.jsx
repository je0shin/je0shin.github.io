import React, { useState, forwardRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Link from "@mui/material/Link";

import { projectData } from "../data/projectdata";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const PortfolioSection = forwardRef((props, ref) => {
  const [projects, setProjects] = useState(projectData);

  return (
    <div style={{ minHeight: "100vh" }} ref={ref}>
      <Divider />

      <Box sx={{ p: 2, mt: 7 }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4">Portfolio</Typography>
        </ThemeProvider>
      </Box>
      {/* <Box sx={{ p: 2 }}></Box>  */}
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} direction="row">
          {projects.map(function (project, key) {
            return (
              <Grid
                item
                key={key}
                sm={12}
                md={6}
                lg={6}
                xl={4}
                sx={{
                  height: "auto",
                }}
              >
                <Card
                  sx={{ height: "100%" }}
                  style={{ backgroundColor: "#F2FDFA" }}
                >
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Link
                        href={project.link}
                        color="inherit"
                        underline="none"
                        target="_blank"
                      >
                        <Typography variant="h5" align="left">
                          {project.name}
                        </Typography>
                      </Link>
                    </ThemeProvider>
                    <Typography variant="subtitle2" align="left">
                      {project.tags.map(function (tag, i) {
                        return (
                          <Typography
                            display="inline"
                            sx={{ m: 0, p: 0 }}
                            key={i}
                          >
                            #{tag}{" "}
                          </Typography>
                        );
                      })}
                    </Typography>
                    <Typography variant="body2" align="left" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
});
export default PortfolioSection;
