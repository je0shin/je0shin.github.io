import React, { useState, forwardRef } from "react";
import {
  Avatar,
  Box,
  Divider,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Tooltip,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import ProfileImg from "../assets/profile.jpg";
import TechnicalResume from "../assets/technical_resume.pdf";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const AboutSection = forwardRef((props, ref) => {
  const [phoneNoCopiedNotificationOpen, setPhoneNoCopiedNotificationOpen] =
    useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPhoneNoCopiedNotificationOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div style={{ minHeight: "100vh" }} ref={ref}>
      <Divider />
      <Box sx={{ pt: 5, mt: 7 }}>
        <Grid container>
          <Grid
            item
            container
            xs={12}
            md={12}
            lg={4}
            component={Stack}
            direction="column"
            justifyContent="center"
          >
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                image={ProfileImg}
                alt="Profile Image"
                sx={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
            component={Stack}
            justifyContent="top"
          >
            <Card elevation={0}>
              <List>
                {/* Title */}
                <ListItem>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h5">Basic information</Typography>
                  </ThemeProvider>
                </ListItem>
                {/* Name */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Jeongho Shin" />
                </ListItem>
                {/* Languages */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LanguageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Korean, English" />
                </ListItem>
                {/* Education */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SchoolIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="SUNY Korea (Stony Brook University) Bachelor of Science, Computer Science" />
                </ListItem>
                {/* E-mail */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="neutrino400@gmail.com" />
                </ListItem>
                {/* Links */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LinkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Tooltip title="Go to LinkedIn">
                    <IconButton
                      size="medium"
                      aria-label="close"
                      color="inherit"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/jeongho-shin-771a1717b/",
                          "_blank"
                        )
                      }
                    >
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Go to Github">
                    <IconButton
                      size="medium"
                      aria-label="close"
                      color="inherit"
                      onClick={() =>
                        window.open("https://github.com/je0shin", "_blank")
                      }
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Write Email">
                    <IconButton
                      size="medium"
                      aria-label="close"
                      color="inherit"
                      onClick={() =>
                        window.open("mailto: neutrino400@gmail.com")
                      }
                    >
                      <EmailIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </ListItem>
                {/* Technical resume */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ArticleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Tooltip title="Open technical resume">
                    <ListItemButton
                      size="medium"
                      aria-label="close"
                      color="inherit"
                      onClick={() => window.open(TechnicalResume, "_blank")}
                      sx={{ pl: 0 }}
                    >
                      <Typography> Technical resume </Typography>
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ m: 1, p: 1 }}>
          <ThemeProvider theme={theme}>
            <Typography variant="h4" align="left">
              Relevant skills
            </Typography>
          </ThemeProvider>
          <Typography variant="h6" align="left">
            Programming languages
          </Typography>
          <Typography variant="body1" align="left">
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>SQL</li>
            </ul>
          </Typography>
          <Typography variant="h6" align="left">
            Frameworks and technology
          </Typography>
          <Typography variant="body1" align="left">
            <ul>
              <li>Flask</li>
              <li>React.js</li>
              <li>MUI</li>
              <li>MariaDB</li>
            </ul>
          </Typography>
        </Box>
      </Box>
      {/* Snackbar when copying phone number */}
      <Snackbar
        open={phoneNoCopiedNotificationOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Phone number copied!"
        action={action}
      />
    </div>
  );
});
export default AboutSection;
