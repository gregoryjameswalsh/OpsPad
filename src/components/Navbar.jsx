import React from 'react'
import '../App.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <p>OpsPad</p>
            </div>

            <div className="navbar-center">
                <div className="nav-links">
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </div>
            </div>

            <div className="nav-links">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
            </div>
        </nav>
    )
}

export default Navbar