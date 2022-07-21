import React, { useState } from "react";
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
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

import ProfileImg from "../assets/profile.jpg";
import TechnicalResume from "../assets/technical_resume.pdf";

export default function AboutSection() {
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
    <div style={{ height: "100vh" }}>
      <Divider />

      <Box sx={{ p: 2 }}>
        About
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                image={ProfileImg}
                alt="Profile Image"
                sx={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <Card elevation={0}>
              <List>
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
                {/* Contacts */}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalPhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Tooltip title="Copy phone number">
                    <ListItemButton
                      onClick={() => {
                        navigator.clipboard.writeText("+821030131655");
                        setPhoneNoCopiedNotificationOpen(true);
                      }}
                      sx={{ pl: 0, color: "#000" }}
                    >
                      {"+82 10 3013 1655"}
                    </ListItemButton>
                  </Tooltip>
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
                  <Tooltip title="Open technical resume">
                    <IconButton
                      size="medium"
                      aria-label="close"
                      color="inherit"
                      onClick={() => window.open(TechnicalResume, "_blank")}
                    >
                      <ArticleIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ m: 1, p: 1 }}>
          <Typography>
            {
              "Hello! This is a website quickly made to act as a portfolio for me for related purposes."
            }
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
}
