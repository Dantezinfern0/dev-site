import React from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import logos from '../data/Logo';
import Github from '../components/Github'
import EmailMe from '../components/EmailMe'
import DantePortrait from '../images/danteportrait.jpg'
import Shopify from '../images/shopify-partner.jpg'
import Certificate from '../images/certification.jpg'
import Degree from '../images/diploma.jpg'


const description = "In 2019 Dante attended code school at Suncoast Developer's guild in St Petersburg, FL. Since then he has been freelancing, building shopify stores, extending their reach and integrating their previous content and shop items with data migration."



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
                                    <Github  />
                                    <EmailMe />
                                </p>
                                <Row>
                                    <img className="border-rounded" src={Certificate} alt="Web Development Certification" />
                                    <img className="border-rounded" src={Degree} alt="Diploma for Bachelor of Science in Psychology" />
                                </Row>
                            </Col>
                            <Col>
                                <img id="aDante" src={DantePortrait} alt="cartoon avatar of dante" />
                                <img src={Shopify} alt="Shopify Partner Logo"/>
                                {logos.map((logo, i) => {return <img className="icon-img" key={i} src={logo.src} alt={logo.altText} />})}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </>
}

export default Dante