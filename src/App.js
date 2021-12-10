import React, { Component } from 'react';
import Navigator from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
    Container,
    Jumbotron
} from 'reactstrap';
import Dante from './pages/Dante'
import Portfolio from './pages/Portfolio'
import TipCalc from './pages/TipCalc'
import WeatherWidget from './pages/WeatherWidget'
import Affiliates from './components/Affiliates'
import Chess from './pages/Chess'
import Octocats from './pages/Octocats'
import ColorPicker from './pages/ColorPicker'
import Stream from './pages/Stream'

class App extends Component {
    render() {
        return (
                <div className="center-it">
            <Jumbotron>
                <Container>
                    <BrowserRouter>
                <Navigator />
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route exact path="/dante" component={Dante}></Route>
                        <Route exact path="/livestream" component={Stream} ></Route>
                        <Route exact path="/affiliates" component={Affiliates}></Route>
                        <Route exact path="/portfolio" component={Portfolio}></Route>
                        <Route exact path="/weather" component={WeatherWidget}></Route>
                        <Route exact path="/tipcalc" component={TipCalc}></Route>
                        <Route exact path="/chess" component={Chess}></Route>
                        <Route exact path="/octocats" component={Octocats}></Route>
                        <Route exact path="/colorpicker" component={ColorPicker}></Route>
                    </Switch>
                </BrowserRouter>
                <Footer />
                </Container>
                </Jumbotron>
            </div>
        );
    }
}
export default App;