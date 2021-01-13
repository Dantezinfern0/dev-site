import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

 class Navigator extends Component {
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
    render(){
    return ( <>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">
                        DantHarasz.dev
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/dante">Dante</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/weather">Weather</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/tipcalc">TipCalc</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/affiliates">Affiliates</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
    </> )}
}

export default Navigator