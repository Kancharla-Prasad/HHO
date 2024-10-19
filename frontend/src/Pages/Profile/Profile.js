import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock"; // Optional, for button icon
import PersonIcon from "@mui/icons-material/Person"; // Avatar icon

const Profile = () => {
  const [open, setOpen] = useState(false); // State to control the modal
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOldPassword(""); // Reset old password field
    setNewPassword(""); // Reset new password field
  };

  const handleUpdatePassword = () => {
    // Add your password update logic here
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    handleClose(); // Close modal after updating
  };

  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "white", // Background color
        color: "#fa9a34",
        height: { xs: "auto", md: "200px" }, // Adjust height based on screen size
        width: "100%",
        padding: { xs: "5px 10px", md: "10px 20px" }, // Responsive padding
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        marginBottom: "20px",
        overflow: "visible",
      }}
    >
      <CardContent sx={{ textAlign: "center", paddingBottom: { xs: "50px", md: "20px" } }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontFamily: '"Playpen Sans", cursive',
            fontSize: { xs: "20px", md: "50px" }, // Responsive font size
          }}
        >
          HHO
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontFamily: '"Playpen Sans", cursive',
            fontSize: { xs: "15px", md: "30px" }, // Responsive font size
            marginBottom: { xs: "20px", md: "0px" }, // Add margin bottom for mobile
          }}
        >
          Welcome {"Core"}
        </Typography>
      </CardContent>

      {/* Avatar with icon moved to the left */}
      <Avatar
        sx={{
          position: "absolute",
          bottom: { xs: -30, md: -30 }, // Adjusted for bottom spacing
          left: { xs: 10, md: 20 }, // Position on left for mobile
          width: { xs: 80, md: 100 }, // Responsive avatar size
          height: { xs: 80, md: 100 }, // Responsive avatar size
          border: "3px solid white",
          backgroundColor: "#fa9a34", // Optional: to make the avatar pop
        }}
      >
        <PersonIcon sx={{ fontSize: { xs: 20, md: 40 } }} /> {/* Responsive icon size */}
      </Avatar>

      {/* Change Password Button positioned at the bottom right */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#fa9a34", // Set the button background color
          position: "absolute",
          bottom: 10, // Adjusted for bottom spacing
          right: 10, // Position to the right
          padding: { xs: "5px 10px", md: "10px 20px" }, // Responsive padding for button
          fontSize: { xs: "12px", md: "16px" },
          fontWeight: "bolder", // Responsive font size for button text
          "&:focus": {
            outline: "none", // No outline on focus
          },
          "&:active": {
            border: "none", // No border when clicked
            outline: "none",
            boxShadow: "none", // Remove any shadow
          },
        }}
        startIcon={<LockIcon />}
        onClick={handleClickOpen} // Open modal on button click
      >
        Change Password
      </Button>

      {/* Modal for Change Password */}
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#fa9a34", // Light orange background for the dialog
            color: "black", // Black text color
          },
        }}
      >
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Old Password"
            type="password"
            fullWidth
            variant="outlined"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            InputProps={{
              sx: { color: "black" }, // Set text color to black
            }}
          />
          <TextField
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
            variant="outlined"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              sx: { color: "black" }, // Set text color to black
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdatePassword} color="primary">
            Update Password
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Profile;
