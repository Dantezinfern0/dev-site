import React from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import logos from '../data/Logo';
import Rotator from '../components/Rotator'
import baldGuy from '../images/danteavatar.png'
import EmailMe from '../components/EmailMe'
import CV from '../components/CV'
import LinkedIn from '../components/LinkedIn'
import Github from '../components/Github'



const description = "In 2019 Dante attended code school at Suncoast Developer's guild in St Petersburg, FL.  Since then he has been freelancing and working on personal projects.  Currently he is the web developer for the Randyland Museum."

const Dante = () => {
    return <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Aloha!</h1>
                                <p>
                                    {description}
                                    <br />
                                    <LinkedIn />
                                    <Github  />
                                    <CV />
                                    <EmailMe />
                                </p>
                                {logos.map((logo, i) => {return <img className="icon-img" key={i} src={logo.src} alt={logo.altText} />})}
                            </Col>
                            <Col>
                                <img src={baldGuy} alt="cartoon avatar of dante" />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <h1>
                                Projects
                            </h1>
                            <Rotator />
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
}

export default Dante

