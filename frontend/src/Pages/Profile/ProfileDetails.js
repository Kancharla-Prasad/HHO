import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable"; // Icon for adding events

const ProfileDetails = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {/* First Box: Name, Role, and Email (4 columns wide) */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "280px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
            }}
          >
            <CardContent
              sx={{
                textAlign: "left", // Align text to the left
                padding: "15px",
                display: "flex",
                flexDirection: "column", // Stack items vertically
                justifyContent: "center",
                width: "100%", // Allow full width for alignment
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                E3 Core
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", marginBottom: "10px" }}>
                CORE
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", marginBottom: "10px" }}>
                core@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Box: Description of what the user has done (8 columns wide) */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "280px",
              display: "flex",
              flexDirection: "column", // Center horizontally
            }}
          >
            <CardContent sx={{ textAlign: "center", padding: "15px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
                What I have done:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EventAvailableIcon sx={{ color: "#fa9a34" }} />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Vasista 2K23
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EventAvailableIcon sx={{ color: "#fa9a34" }} />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Chaithra 2K23 
                  </Typography>
                </ListItem><ListItem>
                  <ListItemIcon>
                    <EventAvailableIcon sx={{ color: "#fa9a34" }} />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    Pramidha 2K24
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
