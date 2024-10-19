import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useMediaQuery } from '@mui/material';

function LeftImageCard({donation,isEvenRow}) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
           <Grid item size={{ xs: 12, md: 6 }}>
                <Card sx={{display:"flex",height:isMobile?"auto":"280px",fontFamily:"'Playpen Sans', cursive", boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                '&:hover': { boxShadow: '0px 6px 16px orange' },}}>
                    <CardActionArea>
                        <CardContent >
                                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"'Playpen Sans', cursive"}} >
                                    {donation.title}
                                </Typography>
                                <Typography gutterBottom variant="body" component="div">
                                <span style={{color:"#fa9a34"}}><b>Donated to :</b> </span>   {donation.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {donation.description}
                                </Typography>
                                <Typography gutterBottom variant="body" component="div">
                                   donated on {donation.date}
                                </Typography>
                                
                                
                        </CardContent>
                    </CardActionArea>
                    <CardActionArea>
                    <CardMedia
                         component="img"
                         height="280"
                         image={donation.image}
                         alt="green iguana"
                         sx={{
                            borderRadius:isMobile ? 
                            "10px":isEvenRow ? "100% 0% 0% 0%" : "0% 0% 0% 100%",
                            transition:"0.5s",
                            "&:hover":{
                                borderRadius:"0% 0% 0% 0%",
                            }
                         }}
                         />       
                    </CardActionArea> 
                </Card>
            </Grid> 
        </>
    );
}

export default LeftImageCard;