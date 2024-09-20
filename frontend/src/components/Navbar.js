// import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar(){
    const isLoged = false;
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-orange">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png" className="navbar-logo ml-0" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
                {/* <a className="nav-link mr-md-2" href="/" id="nav-item1">
                    Home
                    <span className="sr-only">(current)</span>
                </a> */}
                <Link className='nav-link mr-md-2' to='/' id="nav-item1">Home</Link>

                {/* <a className="nav-link mr-md-2" href="/" id="nav-item2">Events</a> */}
                <Link className='nav-link mr-md-2' to='/events' id="nav-item2">Events</Link>
                {/* <a className="nav-link mr-md-2" href="/" id="nav-item3">Transactions</a> */}
                <Link className='nav-link mr-md-2' to='/transactions' id="nav-item3">Transactions</Link>

                {/* <a className="nav-link mr-md-2" href="/" id="nav-item4">Our Services</a> */}
                <Link className='nav-link mr-md-2' to='/services' id="nav-item4" >Our Services</Link>

                {/* <a className="nav-link mr-md-2" href="/" id="nav-item4">About Us</a> */}
                <Link className='nav-link mr-md-2' to='/about' id="nav-item5" >About Us</Link>

            </div>
            {isLoged ? (
                   <button className='login-logo'>A</button>
                ) : (
                   <Link className='nav-login ml-2' to='/login'> Login</Link>
                )}
            
        </div>
        
    </div>
</nav>
    )
}