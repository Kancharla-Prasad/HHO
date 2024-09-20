import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event';
import Transactions from './Pages/Transactions/Transactions';
import About from './Pages/About/About';
import Services from './Pages/Ourservices/Services';
import Login from './Pages/Login/Login';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        
        <Route path='/events' element={<Event />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    <Footer />
    </>
  );
}

export default App;
