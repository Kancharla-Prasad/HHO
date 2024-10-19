import React from 'react';
import { styled} from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Typography, Card, CardContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'; 

const Cardtemplate = styled(Card)(({ theme }) => ({
    boxShadow:"0px",
    '&:hover': {
      boxShadow: "2px 2px 2px 2px gray",
    },
  }));

  const getCardColor = (type) => {
    switch (type) {
      case 'donations':
        return '#fa9a34'; // Purple for donations
      case 'credit':
        return '#4caf50'; // Green for credit
      case 'debit':
        return '#f44336'; // Red for debit
      default:
        return '#e0e0e0'; // Default gray if type doesn't match
    }
  };
function TransactionCard({transaction}) {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <Cardtemplate sx={{ minWidth: 275, marginBottom: 2,cursor:"pointer" ,fontFamily:'"Playpen Sans", cursive'}}>
                <CardContent sx={{display:"flex",gap:"10px",flexDirection:"column",alignContent:"space-between",color:"black" ,borderBottom:"2px solid ",borderTop:"2px solid ", borderColor:getCardColor(transaction.type)}}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography variant="h5" component="div" sx={{padding:"6px 15px 7px 15px" , border:"1px solid",borderColor:getCardColor(transaction.type),borderRadius:"15px"}}>
                    {transaction.type === 'credit' && <AddCircleIcon  sx={{fontSize:isMobile? "20px":"27px",color:getCardColor(transaction.type)}} />}
                    {transaction.type === 'debit' && <RemoveCircleIcon sx={{fontSize:isMobile? "20px":"27px",color:getCardColor(transaction.type)}}/>}
                    {transaction.type === 'donations' && <HandshakeIcon sx={{fontSize:isMobile? "20px":"27px",color:getCardColor(transaction.type)}}/>}
                    &nbsp;&nbsp;<span style={{fontSize:"18px"}}>{transaction.amount}</span>
                    </Typography>
                    <Typography sx={{ backgroundColor:"white",borderRadius:"50px",padding:"10px 15px" ,color:"black",fontFamily:'"Playpen Sans", cursive'}}>
                    <CalendarMonthIcon sx={{color:getCardColor(transaction.type)}}/> {transaction.date}
                    </Typography>
                    </div>
                    <div>
                    <Typography sx={{fontFamily:'"Playpen Sans", cursive'}}>
                        <span style={{color:getCardColor(transaction.type),fontWeight:"600"}}>{transaction.type} On </span><br/> {transaction.description}
                    </Typography>
                    </div>
                </CardContent>
            </Cardtemplate>
        </div>
    );
}

export default TransactionCard;