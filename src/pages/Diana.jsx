import React from 'react'
import avatar from '../images/dianavatar.png'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import EmailMe from '../components/EmailMe'



const Diana = () => {
    return <>
    <Jumbotron className="bg-dark text-primary">
        <Container>
            <Row>
                <Col>
                    <h1>Hello, I'm Diana</h1>
                    <img src={avatar} alt="Diana's avatar" />
                    <p>Diana is a master designer,<br />
                    she has an eye for what's cool.</p>
                </Col>
                <Col>Diana has worked for Armory Print works and was a virtual assistant for many years.
                    She is excellent at Design, Social Media, and making logos.  She has helped many businesses to grow
                    their customer base, manage inventory, design products, web sites, branding, you name it.
                    <EmailMe />
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    </>
}

export default Diana