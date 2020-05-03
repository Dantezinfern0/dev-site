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
    </> )}
}

export default Navigator