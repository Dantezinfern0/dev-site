
import React, { Component } from 'react';
import resume from './images/DanteHaraszResume.pdf'
import baldGuy from './images/danteavatar.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

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
                    <NavbarBrand href="/">Dante Harasz - Web Developer</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/k-dante-harasz">LinkedIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/Dantezinfern0">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://randy.land">Randyland</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://visualvitamin.shop">VisualVitamin.shop</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to my home page</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href={resume}
                                        target="_blank"
                                    >
                                        View my CV
                                    </Button>
                                </p>
                            </Col>
                            <Col>
                                <img src={baldGuy} alt="cartoon avatar of dante" />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;