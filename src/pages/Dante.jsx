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

const avatar = "https://lh3.googleusercontent.com/pw/ACtC-3fshkknXBHPY2kqHO9eD0BR8sfflpQBITaQQMDPsvNhNYzXbsP4pzK490FhmtGPS-U7nks5OrxgLh5W7RjUtwetYHAjjPV0jbkEiw3ZQZQ1JZZdsjzLlEEIsPAyXt2PlYj2phqJiae44xGah0jw3wVm=w443-h649-no?authuser=0"
const description = "In 2019 Dante attended code school at Suncoast Developer's guild in St Petersburg, FL.  Since then he has been freelancing and working on personal projects.  Currently he is the web developer for the Randyland Museum."
const linkedIn = "https://www.linkedin.com/in/k-dante-harasz"


const Dante = () => {
    return <>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Aloha!</h1>
                                <p>
                                    {description}
                                    <br />
                                    <LinkedIn link={linkedIn} />
                                    <Github  />
                                    <CV />
                                    <EmailMe />
                                </p>
                                {logos.map((logo, i) => {return <img className="icon-img" key={i} src={logo.src} alt={logo.altText} />})}
                            </Col>
                            <Col>
                                <img src={avatar} alt="cartoon avatar of dante" />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </>
}

export default Dante