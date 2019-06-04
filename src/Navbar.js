import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className = 'link' to="/">Home</Link>
            <Link className = 'link' to="/about">About</Link>
            <Link className = 'link' to="/forsale">For Sale</Link>
            <Link className = 'link' to="/forrent">For Rent</Link>
        </div>
    )
}

export default Navbar