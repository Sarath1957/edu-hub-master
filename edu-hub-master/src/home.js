import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';


const home = () => {
    return (
        <header id="header" className="fixed-top">
      <div className="container d-flex align-items-start">
        <a href="#" className="logo"><img src="/assets/img/logo.png" alt="" className="img-fluid" /></a>

        <h1 className="logoText"><a href="#">Edu-hub</a></h1>
        
        <nav id="navbar" className="navbar ">
          <ul>
          <li className="nav-item">
              <a className="nav-link" ><Link to="/">Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Scholarships</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ><Link to="/LoginPage">Login</Link></a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>

        );
    };
    
export default home;

