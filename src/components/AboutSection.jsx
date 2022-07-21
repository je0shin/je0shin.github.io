import React from "react";
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
  ListItemText,
} from "@mui/material";
import ProfileImg from "../assets/profile.jpg";
import FolderIcon from "@mui/icons-material/Folder";

export default function AboutSection() {
  return (
    <div>
      <Divider />

      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 400, minWidth: 400 }}>
              <CardMedia
                component="img"
                image={ProfileImg}
                alt="Profile Image"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={0}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Single-line item" />
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
