import React from 'react';
import { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import LeftImageCard from './LeftImageCard';
import RightImageCard from './RightImagecard';
function Donations() {
    const [donations,setDonations] = useState([])
    useEffect(() => {
        fetch('/donations.json')
          .then((response) => response.json())
          .then((data) => {
            setDonations(data);
          })
          .catch((error) => console.error('Error fetching donations:', error));
      }, []);


    const rows = donations.reduce((acc, donation, index) => {
        const rowIndex = Math.floor(index / 2);
        if (!acc[rowIndex]) acc[rowIndex] = [];
        acc[rowIndex].push(donation);
        return acc;
      }, []);
    console.log(rows)
    return (
        <div style={{margin:"50px"}} >
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
            marginBottom: '50px',
            textAlign:"center"
            }}
        >
           Our Donations
        </Typography>
            <Grid container spacing={3} justifyContent="center">
            <>
                {rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}> {/* Ensure a valid key */}
                {row.map((donation, cardIndex) => {
                    const isEvenRow = rowIndex % 2 === 0;

                    // Return JSX correctly
                    return cardIndex === 0 ? (
                    <LeftImageCard key={cardIndex} donation={donation} isEvenRow={isEvenRow} />
                    ) : (
                    <RightImageCard key={cardIndex} donation={donation} isEvenRow={isEvenRow} />
                    );
                })}
                </React.Fragment>
            ))}
            </>

            </Grid>
        </div>
    );
}

export default Donations;