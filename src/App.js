import React, { Component } from 'react';
import Navigator from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dante from './pages/Dante'
import Diana from './pages/Diana'
class App extends Component {
    render() {
        return (
            <div><BrowserRouter>
                <Navigator />
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route exact path="/dante" component={Dante}></Route>
                        <Route exact path="/diana" component={Diana}></Route>
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}
export default App;