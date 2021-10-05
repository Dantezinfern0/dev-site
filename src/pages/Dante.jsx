import React from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import logos from '../data/Logo';
import CV from '../components/CV'
import LinkedIn from '../components/LinkedIn'
import Github from '../components/Github'
import EmailMe from '../components/EmailMe'
import DantePortrait from '../images/danteportrait.jpg'
import Shopify from '../images/shopify-partner.jpg'


const description = "In 2019 Dante attended code school at Suncoast Developer's guild in St Petersburg, FL.  Since then he has been freelancing and contributing to open source project Lichess.org"
const linkedIn = "https://www.linkedin.com/in/dante-harasz"


const Dante = () => {
    return <>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Aloha!</h1>
                                <p>
                                    <span>
                                        {description}
                                    </span>
                                    <br />
                                    <LinkedIn link={linkedIn} />
                                    <Github  />
                                    <CV />
                                    <EmailMe />
                                <img src={Shopify} alt="Shopify Partner Logo"/>
                                </p>
                            </Col>
                            <Col>
                                <img id="aDante" src={DantePortrait} alt="cartoon avatar of dante" />
                            </Col>
                        </Row>
                                {logos.map((logo, i) => {return <img className="icon-img" key={i} src={logo.src} alt={logo.altText} />})}
                    </Container>
                </Jumbotron>
            </>
}

export default Dante