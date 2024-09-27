import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginSuccessMessage() {
  const [open, setOpen] = useState(false);

  // Function to show the Snackbar (when login is successful)
  const handleLoginSuccess = () => {
    setOpen(true); // Open the Snackbar
  };

  // Function to close the Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); // Close the Snackbar
  };

  return (
    <div>
      {/* Button simulating a successful login */}
      <Button variant="contained" color="primary" onClick={handleLoginSuccess}>
        Simulate Login
      </Button>

      {/* Snackbar to display the success message */}
      <Snackbar
        open={open}
        autoHideDuration={3000} // Auto close after 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Position at the top-right corner
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully Logged In!
        </Alert>
      </Snackbar>
    </div>
  );
}
