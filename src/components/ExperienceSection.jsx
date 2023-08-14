import React, { forwardRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { List, ListItem, ListItemText } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ExperienceSection = forwardRef((props, ref) => {
  return (
    <div style={{ minHeight: "100vh" }} ref={ref}>
      <Divider />

      <Box sx={{ p: 2, mt: 7 }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4">Work Experience</Typography>
        </ThemeProvider>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ maxWidth: "30px" }}
            >
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ maxWidth: "30px" }}
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                component="span"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ m: 0 }}
              >
                <Typography variant="h6" align="left">
                  AI2S Lab
                </Typography>
                <Typography variant="body1" align="right">
                  09/21 - 02/22
                </Typography>
              </Box>
              <Typography
                variant="subheading2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                Research assistant
              </Typography>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemText
                    primary="GPS related research"
                    secondary={
                      <React.Fragment>
                        {
                          "Developed an Android Application that logs the location and GNSS data of the user."
                        }
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ maxWidth: "30px" }}
            >
              2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ maxWidth: "30px" }}
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                component="span"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ m: 0 }}
              >
                <Typography variant="h6" align="left">
                  ZeroClassLab
                </Typography>
                <Typography variant="body1" align="right">
                  {" "}
                  03/22 - 05/22
                </Typography>
              </Box>

              <Typography
                variant="subheading2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                Research assistant
              </Typography>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemText
                    primary="Smart factory solutions"
                    secondary={
                      <React.Fragment>
                        {
                          "Developed an Android application that detects ARUCO marker, used Blender to model a simple container and a cabinet, and developed a Python application that sends simple commands to a DJI Tello drone."
                        }
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ maxWidth: "30px" }}
            >
              2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ maxWidth: "30px" }}
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                component="span"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ m: 0 }}
              >
                <Typography variant="h6" align="left">
                  LIG Nex1
                </Typography>
                <Typography variant="body1" align="right">
                  {" "}
                  02/23 - now
                </Typography>
              </Box>
              <Typography
                variant="subheading2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                Researcher
              </Typography>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem alignItems="flex-start" disableGutters>
                  <ListItemText
                    primary="System"
                    secondary={
                      <React.Fragment>
                        {"Developed Command and Control System"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </div>
  );
});
export default ExperienceSection;
