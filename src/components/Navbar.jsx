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
                        DanteHarasz.dev
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="button-bump" href="/dante">Dante</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/livestream">LiveStream</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/portfolio">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/weather">Weather</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/colorpicker">ColorPicker</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/tipcalc">TipCalc</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/chess">Chess</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/octocats">Octocats</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="button-bump" href="/affiliates">Affiliates</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
    </> )}
}

export default Navigator