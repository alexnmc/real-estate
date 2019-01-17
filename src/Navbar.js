import React from 'react'
import Scrollchor from 'react-scrollchor'


const Navbar = () => {
    return (
        <div className="navbar">
            <Scrollchor className = 'link' to="#1">home</Scrollchor>  
            <Scrollchor className = 'link' to="#2">about</Scrollchor>
            <Scrollchor className = 'link' to="#3">properties</Scrollchor>
        </div>
    )
}

export default Navbar