import React from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import LinkedIn from '../components/LinkedIn'
import EmailMe from '../components/EmailMe'

const dAvatar = "https://lh3.googleusercontent.com/pw/ACtC-3fObrFKGDGoJF4F-kQRpCzG6iCbLq8CSW2StS58FQl4j9V0SQR4fZttFzbJ_BVqs4EDymJWcJhHGctyOvbaKHD5-di1M5VsFTqEhmI1e8osbspvxpX5x6Hz71kVKumLh8yuSGFnPdu8PJcDd6RX1U_R=w819-h743-no?authuser=0"
const linkIn = "https://www.linkedin.com/in/diana-morgan"

const Diana = () => {
    return <>
    <Jumbotron className="bg-dark text-primary">
        <Container>
            <Row>
                <Col>
                    <h1>Hello, I'm Diana</h1>
                    <img id="dAvatar" src={dAvatar} alt="Diana's avatar" />
                    <p>Diana is a master designer,<br />
                    she has an eye for what's cool.</p>
                </Col>

                <Col>
                <h5>Diana has worked for Armory Print works and was a virtual assistant for many years.
                    She is excellent at Design, Social Media, and making logos.  She has helped many businesses to grow
                    their customer base, manage inventory, design products, web sites, branding, you name it.</h5>
                    <LinkedIn link={linkIn} />
                    <EmailMe />
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    </>
}

export default Diana