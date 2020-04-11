
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
import logos from './data/Logo';
import Rotator from './components/Rotator'
import Footer from './components/Footer'

const description = "In 2019 I attended code school at Suncoast Developer's guild in St Petersburg, FL.  Since then I have been freelancing and working on personal projects.  Currently I am the web developer for the Randyland Museum."

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
                                <h1>Welcome!</h1>
                                <p>
                                    {description}
                                    <br />
                                    <Button
                                        className="small-margin"
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href={resume}
                                        target="_blank"
                                    >
                                        View my CV
                                    </Button>
                                    <Button
                                        className="small-margin"
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="mailto:danteharasz@gmail.com?Subject=Web%20Development%20Work%20Needed"
                                        target="_top"
                                    >
                                        Email Me
                                    </Button>
                                </p>
                                {logos.map((logo, i) => {return <img className="icon-img" key={i} src={logo.src} alt={logo.altText} />})}
                            </Col>
                            <Col>
                                <img src={baldGuy} alt="cartoon avatar of dante" />
                            </Col>
                        </Row>
                        <Row>
                            <h1>
                                Projects
                            </h1>
                            <Rotator />
                        </Row>
                    </Container>
                </Jumbotron>
                    <Footer />
            </div>
        );
    }
}

export default App;