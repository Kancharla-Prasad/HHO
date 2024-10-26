import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar, Divider, Tab, Tabs, Fade } from '@mui/material';
import { CreditScore, MoneyOff, VolunteerActivism, AllInbox } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import {ThemeProvider,createTheme } from '@mui/material'
// Sample Transaction Data
const transactions = {
  all: [
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
    { id: 3, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
    
  ],
  credits: [
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
    { id: 2, name: 'Fundraiser Event', amount: '+₹2000', type: 'credit', date: 'Oct 17, 2024' },
  ],
  debits: [
    { id: 1, name: 'Office Supplies', amount: '-₹150', type: 'debit', date: 'Oct 16, 2024' },
  ],
  donations: [
    { id: 1, name: 'Donation from John', amount: '+₹500', type: 'credit', date: 'Oct 15, 2024' },
  ],
};

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
  

export default function TransactionPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const handleTabChange = (event, newValue) => {
    setFadeIn(false); // Trigger fade-out
    setTimeout(() => {
      setActiveTab(newValue);
      setFadeIn(true); // Trigger fade-in
    }, 300); // Sync with fade-out animation
  };

  const getCurrentTransactions = () => {
    switch (activeTab) {
      case 0: return transactions.all;
      case 1: return transactions.credits;
      case 2: return transactions.debits;
      case 3: return transactions.donations;
      default: return [];
    }
  };

  const [filter, setFilter] = useState('');
  const handleSearch = (event) => setFilter(event.target.value);
  return (
    <Box sx={{ display: 'flex', height: '80vh', backgroundColor: 'white' }}>
      {/* Left Tabs Panel */}
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#fa9a34',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 2,
        }}
      >
        <Typography variant="h5" align="center" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Transactions
        </Typography>
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { backgroundColor: 'white', width: 5 } }}
          sx={{
            '.MuiTab-root': {
              color: 'white',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '5px',
              },
            },
          }}
        >
          <Tab icon={<AllInbox />} label="All" />
          <Tab icon={<CreditScore />} label="Credits" />
          <Tab icon={<MoneyOff />} label="Debits" />
          <Tab icon={<VolunteerActivism />} label="Donations" />
        </Tabs>
      </Box>

      {/* Right Scrollable Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: 3,
          backgroundColor: 'white',
        }}
      >
        
          <ThemeProvider theme={customTheme}>
            <div className='d-flex justify-content-end' style={{ margin: "20px",gap:"30px" }}>
              <div>
                <TextField id="outlined-basic" label="Search" variant="outlined"/>
              </div>
              
                <FormControl sx={{width:"30%"}}>
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
            </ThemeProvider>
            <Fade in={fadeIn} timeout={300}>
          <List>
            {getCurrentTransactions().map((transaction) => (
              <React.Fragment key={transaction.id}>
                <ListItem>
                  <Avatar
                    sx={{
                      bgcolor: '#fa9a34',
                      marginRight: 2,
                    }}
                  >
                    {transaction.type === 'credit' ? <CreditScore /> : <MoneyOff />}
                  </Avatar>
                  <ListItemText primary={transaction.name} secondary={transaction.date} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: transaction.type === 'credit' ? '#4caf50' : '#f44336',
                      fontWeight: 'bold',
                    }}
                  >
                    {transaction.amount}
                  </Typography>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Fade>
      </Box>
    </Box>
  );
}
