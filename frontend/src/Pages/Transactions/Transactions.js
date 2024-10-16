// import React from 'react'


import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Card, CardContent } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CountUp from 'react-countup';
import Button from '@mui/material/Button';
import { styled,alpha, borderColor} from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery'; 
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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

// Customizing Tab to change colors when active
const CustomTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: "#fa9a34", // Change the color for selected tab (you can modify this)
    color: '#ffffff',
    border:"none",
    outline:"none",
    borderRadius:"10px",
    boxShadow:"5px 5px 2px #fa9a34"
  },
  '&:not(.Mui-selected)': {
    backgroundColor: '#ffffff',
    color: '#000',
    border:"1px solid #fa9a34",
    outline:"none",
    transition:"1.5s",
  },
  textTransform: 'none', // To keep the label text as-is without uppercasing
  borderRadius:"10px",
  fontSize:"18px"
}));
const Cardtemplate = styled(Card)(({ theme }) => ({
  boxShadow:"0px",
  '&:hover': {
    boxShadow: "2px 2px 2px 2px gray",
  },
}));
const ButtonType = styled(Button)(({ theme }) => ({
  backgroundColor:"#fa9a34",
  padding:"17px",
  fontSize:"18px"
}));
const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '4px',
  border:"1px solid #fa9a34",  // You can use fixed values instead of theme properties  // Directly using white color
  '&:hover': {
    border:"1px solid #fa9a34" // Darken white on hover
  },
  '@media (min-width:600px)': {
    marginLeft: '24px',
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  padding: '0 20px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: '#fa9a34',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 0',  // Vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + 32px)`,
    transition: 'width 200ms ease-in-out',
    width: '50%',
    '@media (min-width:960px)': {
      width: '20ch',
    },
  },
}));


// Custom TabPanel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TransactionPage() {
  
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const renderCard = (type, description,date,amount) => (
    <Cardtemplate sx={{ minWidth: 275, marginBottom: 2,cursor:"pointer" ,fontFamily:'"Playpen Sans", cursive'}}>
      <CardContent sx={{display: isMobile ? "block":"flex",gap:"20px",flexDirection:"column",alignContent:"space-between",color:"black" ,borderBottom:"2px solid ",borderTop:"2px solid ", borderColor:getCardColor(type)}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h5" component="div" sx={{padding:"10px 15px" , border:"1px solid",borderColor:getCardColor(type),borderRadius:"15px"}}>
          {type === 'credit' && <AddCircleIcon  sx={{fontSize:"30px",color:getCardColor(type)}} />}
          {type === 'debit' && <RemoveCircleIcon sx={{fontSize:"30px",color:getCardColor(type)}}/>}
          {type === 'donations' && <HandshakeIcon sx={{fontSize:"30px",color:getCardColor(type)}}/>}
          &nbsp;&nbsp;<span style={{fontSize:"18px"}}>{amount}</span>
          </Typography>
          <Typography sx={{ mb: 1.5, backgroundColor:"white",borderRadius:"50px",padding:"10px 15px" ,color:"black",fontFamily:'"Playpen Sans", cursive'}}>
          <CalendarMonthIcon sx={{color:getCardColor(type)}}/> {date}
          </Typography>
        </div>
        <div>
          <Typography sx={{ mb: 1.5,fontFamily:'"Playpen Sans", cursive'}}>
            <span style={{color:getCardColor(type),fontWeight:"600"}}>{type} On </span><br/> {description}
          </Typography>
        </div>
      </CardContent>
    </Cardtemplate>
  );
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    
    <div>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height: "70vh",backgroundColor:"white"}}>
        <div>
        <h1 className='about-title text-center' ><span className='span'>Transactions</span></h1>
          <figure className="text-center">
          <blockquote className="blockquote">
              <p className='about-content'>
              "At Helping Hands, every contribution counts, and every transaction is transparent. <br/>
              Every penny you give goes exactly where you expect it to.<br/>
              Your trust is our strength, and together, we build a brighter future."
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title" style={{ fontSize: "18px" }} className='about-content'>Helping Hands Organization</cite>
            </figcaption>
            <ButtonType variant="contained" sx={{marginTop:"50px"}}> Current Balance &nbsp;&nbsp;:  &nbsp;&nbsp;<CountUp end={3000000} /></ButtonType>
            <Search sx={{marginTop:"50px"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search the transaction"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </figure>
         
        </div>
        
     </Box>
      <Box sx={{ display:isMobile ? "block":'flex', height: 'auto', width: '100%', marginTop: 4 ,backgroundColor:"whitesmoke"}}>
      {/* Sidebar Tabs */}
      <Box sx={{ width: isMobile ? '100%' : '250px', p: 2, }}>
        <Tabs
          orientation={isMobile ? 'horizontal' : 'vertical'}
          value={value}
          onChange={handleChange}
          aria-label="transaction tabs"
          TabIndicatorProps={{ style: { display: 'none' } }} // Hides the default tab indicator
        >
          <CustomTab label="credit" sx={{margin: isMobile ? "10px":"20px",fontFamily:'"Playpen Sans", cursive'}}/>
          <CustomTab label="debit" sx={{margin: isMobile ? "10px":"20px",fontFamily:'"Playpen Sans", cursive'}}/>
          <CustomTab label="donations" sx={{margin: isMobile ? "10px":"20px",fontFamily:'"Playpen Sans", cursive'}}/>
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <Box sx={{ flexGrow: 1, p: 2,padding:isMobile ? "0px 0px":"0px 100px" }}>
        <TabPanel value={value} index={0}>
          {renderCard('credit', 'Details about the credit transaction.',"20-09-2024","20000/-")}
          {renderCard('credit', 'Details about another credit transaction.',"20-09-2024","20000/-")}
          {renderCard('credit', 'Details about another credit transaction.',"20-09-2024","20000/-")}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {renderCard('debit', 'Details about the debit transaction.',"20-09-2024","20000/-")}
          {renderCard('debit', 'Details about another debit transaction.',"20-09-2024","20000/-")}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {renderCard('donations', 'Details about the donation.',"20-09-2024","20000/-")}
          {renderCard('donations', 'Details about another donation.',"20-09-2024","20000/-")}
        </TabPanel>
      </Box>
    </Box>
    </div>
    
  );
}

export default TransactionPage;


// function Transactions() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Transactions
