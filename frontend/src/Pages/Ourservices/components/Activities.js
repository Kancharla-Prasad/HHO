import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const activities = [
  {
    title: 'Fundraising Event',
    description: 'Join us in raising funds for various causes that make a difference in the community.',
    image: 'https://res.cloudinary.com/dgye02qt9/image/upload/v1729256419/fundraising_image_sejlcp.jpg'
  },
  {
    title: 'Coding Event',
    description: 'A coding marathon to solve real-world problems and create impactful solutions.',
    image: 'https://res.cloudinary.com/dgye02qt9/image/upload/v1729256420/codingcontest_rnxoog.jpg'
  },
  {
    title: 'Blood Donation Camps',
    description: 'Help save lives by donating blood at our organized camps.',
    image: 'https://res.cloudinary.com/dgye02qt9/image/upload/v1729256419/blood_donation_g4qamj.png'
  },
  {
    title: 'Plastic Picking',
    description: 'Participate in our environmental initiative to keep the surroundings clean and green.',
    image: 'https://res.cloudinary.com/dgye02qt9/image/upload/v1729256419/plasticpicking_s4ylq5.jpg'
  },
];


const Activities = () => {
  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, textAlign: 'center' }}>
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
            color:"#fa9a34",
          fontFamily: '"Anton", sans-serif',
          fontWeight: 300,
          fontSize: { xs: '32px', md: '50px' },
          textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          letterSpacing: '3px',
          fontStyle: 'normal',
          marginBottom: '30px',
        }}
      >
        Activities and Initiatives
      </Typography>

      {/* Cards for Activities */}
      <Grid container spacing={3} justifyContent="center">
        {activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#f5f5f5',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                '&:hover': { boxShadow: '0px 6px 16px orange' },
                borderRadius: '10px',
                height: '100%', // Ensure the card takes full height
                display: 'flex',
                flexDirection: 'column', // Allows content to stack vertically,
                // cursor:'pointer'
              }}
            >
              {/* Card Media (Image) */}
              <CardMedia
                component="img"
                height="180" // Adjusted height for consistent size
                image={activity.image}
                alt={activity.title}
                sx={{ objectFit: 'cover' }} // Ensures the image covers the space
              />
              
              {/* Card Content */}
              <CardContent sx={{ flexGrow: 1 }}> {/* Ensures content grows to fill available space */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {activity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  {activity.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Activities;
