
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Footer from './components/Footer'
import Dante from './pages/Dante'
import Diana from './pages/Diana'



class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">
                        DankDevTeam
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://randy.land">Randyland</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://visualvitamin.shop">VisualVitamin.shop</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Diana />
                <Dante />
                <Footer />
            </div>
        );
    }
}

export default App;