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
                    <h1>Meet Diana</h1>
                    <img id="dAvatar" src={dAvatar} alt="Diana's avatar" />
                    <p>Diana writes catchy melodies, communicates with animals, 
                        can make dessert out of nearly anything, and 
                        plays a mean game of Scrabble!</p>
                </Col>

                <Col>
                <h5>Diana has over 20 years of experience helping entrepreneurs and small businesses to thrive and grow. 
                    As a big picture thinker with a visionary mind, and a heart for those with heart, she is able to build 
                    upon the dreams of others, bringing life to their ideas, implementing creative plans, and expanding 
                    their successes. She is always the biggest cheerleader for the chasers of dreams!</h5>
                    <h5>

                    For the past 9 years, she has learned the back end of online businesses, including marketing, social 
                    media, graphic and web design, customer service, sales, email list management, blog and newsletter creation, 
                    and e-commerce store management.</h5>

                    <h5>Diana specializes in visual content creation and has an eye for design.</h5>
                    <LinkedIn link={linkIn} />
                    <EmailMe />
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    </>
}

export default Diana