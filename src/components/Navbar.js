import React from "react";
import './css/Navbar.css';
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import App from "../App";
import { BrowserRouter as Router, Routes, Link, Route, NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
        <Router>
        <div className="navbar">
            <ul>
                <li><NavLink to="#home">Home</NavLink></li>
                <li><NavLink to="#services">Services</NavLink></li>
                <li><NavLink to="#about">About Us</NavLink></li>
                <li><NavLink to="#portfolio">Portfolio</NavLink></li>
                <li><NavLink to="#contact">Contact Us</NavLink></li>
            </ul>
            <Routes>
                <Route path="home" element={<App/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="portifolio" element={<Portfolio/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </div>
        </Router>
    );
}
export default Navbar;