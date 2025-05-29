import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <p>OpsPad</p>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="navbar-right">
                <p>Login</p>
                <p>Sign Up</p>
            </div>
        </nav>
    )
}

export default Navbar