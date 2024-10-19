// import React from 'react'


import React, { useState,useEffect } from 'react';
import { Box, Tab, Tabs, Typography,Pagination } from '@mui/material';
import CountUp from 'react-countup';
import Button from '@mui/material/Button';
import { styled} from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery'; 
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import {ThemeProvider,createTheme } from '@mui/material'
import TransactionCard from './TransactionCard';

//customization

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#fa9a34',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            border:"2px solid #fa9a34",
            borderColor: '#fa9a34', // Default border color
          },
          '&:hover fieldset': {
            borderColor: '#fa9a34', // Border on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#fa9a34', // Border on focus
          },
          
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fa9a34', // Default border color for Select
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fa9a34',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fa9a34',
          },
        },
        icon: {
          color: '#fa9a34', // Icon color
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#fa9a34',
            color: 'white',
          },
          '&.Mui-selected': {
            backgroundColor: '#fa9a34',
            color: 'white',
          },
        },
      },
    },
  },
});



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

const ButtonType = styled(Button)(({ theme }) => ({
  backgroundColor:"#fa9a34",
  padding:"17px",
  fontSize:"18px"
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


//function transactionPage starts
// function TransactionPage() {


  

//   const [transactions, setTransactions] = useState([]);
//   const [creditTransactions, setCreditTransactions] = useState([]);
//   const [debitTransactions, setDebitTransactions] = useState([]);
//   const [donationTransactions, setDonationTransactions] = useState([]);


//   const [value, setValue] = useState(0);
//   const [filter, setFilter] = useState('');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  
//   const handleSearch = (event) => {
//     setFilter(event.target.value);
//   };

//   const isMobile = useMediaQuery('(max-width:600px)');

//   useEffect(() => {
//     fetch('/transactions.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setTransactions(data);
//         setCreditTransactions(data.filter((t) => t.type === 'credit'));
//         setDebitTransactions(data.filter((t) => t.type === 'debit'));
//         setDonationTransactions(data.filter((t) => t.type === 'donations'));
//       })
//       .catch((error) => console.error('Error fetching transactions:', error));
//   }, []);

  
  
//   return (
    
//     <>
//       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height: "70vh",backgroundColor:"white"}}>
//         <div>
//           <h1 className='about-title text-center' ><span className='span'>Transactions</span></h1>
//           <figure className="text-center">
//           <blockquote className="blockquote">
//               <p className='about-content'>
//               "At Helping Hands, every contribution counts, and every transaction is transparent. <br/>
//               Every penny you give goes exactly where you expect it to.<br/>
//               Your trust is our strength, and together, we build a brighter future."
//               </p>
//             </blockquote>
//             <figcaption className="blockquote-footer">
//               <cite title="Helping Hands Organization" style={{ fontSize: "18px" }} className='about-content'>Helping Hands Organization</cite>
//             </figcaption>
//             <ButtonType variant="contained" sx={{marginTop:"50px"}}> Current Balance &nbsp;&nbsp;:  &nbsp;&nbsp;<CountUp end={3000000} /></ButtonType>
           
//           </figure>
//         </div>
        
//      </Box>
//       <Box sx={{ display:isMobile ? "block":'flex', height: '70vh', width: '100%', marginTop: 4 ,backgroundColor:"whitesmoke",overflowY:"scroll"}}>
//       {/* Sidebar Tabs */}
//       <Box sx={{ width: isMobile ? '100%' : '250px', p: 2, }}>
//         <Tabs
//           orientation={isMobile ? 'horizontal' : 'vertical'}
//           value={value}
//           onChange={handleChange}
//           aria-label="transaction tabs"
//           TabIndicatorProps={{ style: { display: 'none' } }} // Hides the default tab indicator
//         >
//           <CustomTab label="All" sx={{margin: isMobile ? "10px":"20px",fontFamily:'"Playpen Sans", cursive'}}/>
//           <CustomTab label="Credit" sx={{margin: isMobile ? "10px":"20px",fontFamily:'"Playpen Sans", cursive'}}/>
//           <CustomTab label="Debit" sx={{margin: isMobile ? "10px":"20px",fontFamily:'"Playpen Sans", cursive'}}/>
//           <CustomTab label="Donations" sx={{margin: isMobile ? "10px":"20px",fontFamily:'"Playpen Sans", cursive'}}/>
//         </Tabs>
//       </Box>

//       {/* Tab Panels */}
//       <Box sx={{ flexGrow: 1, p: 2,padding:isMobile ? "0px 0px":"0px 100px" }}>
//       <ThemeProvider theme={customTheme}>
//         <div className='row' style={{margin:"20px"}}>
//           <div className='col-12 col-md-6 mt-3'>
//               <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width:"100%"}} />
//           </div>
//           <div className='col-12 col-md-6 mt-3'>
//             <div>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={filter}
//                   label="Filer By"
//                   onChange={handleSearch}
//                 >
//                   <MenuItem value={'amount'}>Amount</MenuItem>
//                   <MenuItem value={'date'}>Date</MenuItem>
//                   <MenuItem value={'event'}>Events</MenuItem>
//                 </Select>
//               </FormControl>
           
//             </div> 
//           </div>
//         </div>
//         </ThemeProvider>
//         <TabPanel value={value} index={0} >
//           {transactions.map((transaction) => (
//           <TransactionCard key={transaction.id} transaction={transaction} />
//           ))}
//         </TabPanel>

//         <TabPanel value={value} index={1}>
//            {creditTransactions.map((transaction) => (
//           <TransactionCard key={transaction.id} transaction={transaction} />
//           ))}
//         </TabPanel>

//         <TabPanel value={value} index={2}>
//            {debitTransactions.map((transaction) => (
//           <TransactionCard key={transaction.id} transaction={transaction} />
//         ))}
//         </TabPanel>

//         <TabPanel value={value} index={3}>
//            {donationTransactions.map((transaction) => (
//           <TransactionCard key={transaction.id} transaction={transaction} />
//         ))}
//         </TabPanel>
//       </Box>
//     </Box>
//     </>
    
//   );
// }


function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [creditTransactions, setCreditTransactions] = useState([]);
  const [debitTransactions, setDebitTransactions] = useState([]);
  const [donationTransactions, setDonationTransactions] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetch('/transactions.json')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setCreditTransactions(data.filter((t) => t.type === 'credit'));
        setDebitTransactions(data.filter((t) => t.type === 'debit'));
        setDonationTransactions(data.filter((t) => t.type === 'donations'));
      })
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const [filter, setFilter] = useState('');
  const handleSearch = (event) => setFilter(event.target.value);
  const isMobile = useMediaQuery('(max-width:600px)');

  // Get paginated data based on the current tab and page
  const paginateData = (data) => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", backgroundColor: "white" }}>
        <div>
          <h1 className='about-title text-center'><span className='span'>Transactions</span></h1>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className='about-content'>
                "At Helping Hands, every contribution counts, and every transaction is transparent. <br />
                Every penny you give goes exactly where you expect it to.<br />
                Your trust is our strength, and together, we build a brighter future."
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Helping Hands Organization" style={{ fontSize: "18px" }} className='about-content'>Helping Hands Organization</cite>
            </figcaption>
            <ButtonType variant="contained" sx={{ marginTop: "50px" }}>
              Current Balance &nbsp;&nbsp;: &nbsp;&nbsp;<CountUp end={3000000} />
            </ButtonType>
          </figure>
        </div>
      </Box>

      <Box sx={{ display: isMobile ? "block" : 'flex', height: 'auto', width: '100%', marginTop: 4, backgroundColor: "whitesmoke", }}>
        {/* Sidebar Tabs */}
        <Box sx={{ width: isMobile ? '100%' : '250px', p: 2 }}>
          <Tabs
            orientation={isMobile ? 'horizontal' : 'vertical'}
            value={value}
            onChange={handleChange}
            aria-label="transaction tabs"
            TabIndicatorProps={{ style: { display: 'none' } }}
          >
            <CustomTab label="All" sx={{ margin: isMobile ? "10px" : "20px", fontFamily: '"Playpen Sans", cursive' }} />
            <CustomTab label="Credit" sx={{ margin: isMobile ? "10px" : "20px", fontFamily: '"Playpen Sans", cursive' }} />
            <CustomTab label="Debit" sx={{ margin: isMobile ? "10px" : "20px", fontFamily: '"Playpen Sans", cursive' }} />
            <CustomTab label="Donations" sx={{ margin: isMobile ? "10px" : "20px", fontFamily: '"Playpen Sans", cursive' }} />
          </Tabs>
        </Box>

        {/* Tab Panels with Pagination */}
        <Box sx={{ flexGrow: 1, p: 2, padding: isMobile ? "0px 0px" : "0px 100px" }}>
          <ThemeProvider theme={customTheme}>
            <div className='row' style={{ margin: "20px" }}>
              <div className='col-12 col-md-6 mt-3'>
                <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: "100%" }} />
              </div>
              <div className='col-12 col-md-6 mt-3'>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Filter By"
                    onChange={handleSearch}
                  >
                    <MenuItem value={'amount'}>Amount</MenuItem>
                    <MenuItem value={'date'}>Date</MenuItem>
                    <MenuItem value={'event'}>Events</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* TabPanel for All Transactions */}
            <TabPanel value={value} index={0}>
              {paginateData(transactions).map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              ))}
              <Pagination
                count={Math.ceil(transactions.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ mt: 2 }}
                shape='rounded'
                color="primary"
              />
            </TabPanel>

            {/* TabPanel for Credit Transactions */}
            <TabPanel value={value} index={1}>
              {paginateData(creditTransactions).map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              ))}
              <Pagination
                count={Math.ceil(creditTransactions.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ mt: 2 }}
                shape='rounded'
                color="primary"
              />
            </TabPanel>

            {/* TabPanel for Debit Transactions */}
            <TabPanel value={value} index={2}>
              {paginateData(debitTransactions).map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              ))}
              <Pagination
                count={Math.ceil(debitTransactions.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ mt: 2 }}
                shape='rounded'
                color="primary"
              />
            </TabPanel>

            {/* TabPanel for Donations */}
            <TabPanel value={value} index={3}>
              {paginateData(donationTransactions).map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              ))}
              <Pagination
                count={Math.ceil(donationTransactions.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ mt: 2}}
                shape='rounded'
                color="primary"
              />
            </TabPanel>
          </ThemeProvider>
        </Box>
      </Box>
    </>
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
