import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from  './About'
import ForSale from './ForSale'
import ForRent from './ForRent'


class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/forsale" component={ForSale}/>
                    <Route path="/forrent" component={ForRent}/>
                </Switch>
            </div>
        )
    }
}

export default App