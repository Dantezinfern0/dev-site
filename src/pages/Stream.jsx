import React from 'react'
import {
    Container,
    Jumbotron,
    Col
} from 'reactstrap';

const Stream = () => {
    return (
        <Jumbotron>
            <Container>
                <Col>
                <div className="pad center-it">
                    <iframe src="https://player.twitch.tv/?channel=alignedalchemy&parent=danteharasz.dev" 
                    frameBorder="0" 
                    allowFullscreen="true" 
                    scrolling="no" 
                    height="378" 
                    width="620"></iframe></div>
                </Col>
            </Container>
        </Jumbotron>
    )
}
export default Stream