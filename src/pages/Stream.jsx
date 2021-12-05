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
                    <iframe src="https://player.twitch.tv/?channel=alignedalchemy&parent=danteharasz.dev" 
                    frameBorder="0" 
                    allowFullscreen="true" 
                    scrolling="no" 
                    height="378" 
                    width="620"></iframe>
                </Col>
            </Container>
        </Jumbotron>
    )
}
export default Stream