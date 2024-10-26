import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event';
import Transactions from './Pages/Transactions/Transaction';
import About from './Pages/About/About';
import Services from './Pages/Ourservices/Services';
import Login from './Pages/Login/Login';
import Footer from './components/footer';
import Dashbord from './Pages/Dashbord/Dashbord';
import Profile from './Pages/Profile/Profile';
import LoginSuccessMessage from './components/Alert';
import { useContext } from 'react';
import { AppContext } from './Context/Context';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ProfileContainer from './Pages/Profile/ProfileContainer';
import Chaitra from './Pages/Event/components/Chaitra';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function App() {
  const{handleClose,open,alertMsg,setAlertMsg} = useContext(AppContext);
  return (
    <>
      <Navbar />
      {
        <Snackbar
        open={open}
        autoHideDuration={3000} // Auto close after 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Position at the top-right corner
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {alertMsg}
        </Alert>
      </Snackbar>
      }
      <Routes>
        <Route  path='/' element={<Home />}/>
        
        <Route path='/events' element={<Event />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashbord />} />
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/chaitra' element={<Chaitra />} ></Route>

      </Routes>
    <Footer />

    </>
  );
}

export default App;
