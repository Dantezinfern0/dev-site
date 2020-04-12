import React, { Component } from 'react';
import Navigator from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'



class App extends Component {
    render() {
        return (
            <>
                <Navigator />
                <HomePage />
                <Footer />
            </>
        );
    }
}

export default App;