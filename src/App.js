import React, { Component } from 'react'

import Navbar from './Navbar'
import Home from './Home'
import About from  './About'
import Contact from './Contact'


class App extends Component {
    render(){
        return (
            <div className = "main">
                <Navbar />
                <Home/>
                <About/>
                <Contact/>
            </div>
        )
    }
}

export default App