import React from 'react'
import {
    Container,
    Jumbotron
} from 'reactstrap';

const Stream = () => {
    return (
        <Jumbotron>
            <Container>
            <iframe src="https://player.twitch.tv/?channel=alignedalchemy&parent=danteharasz.dev" 
            frameBorder="0" 
            allowFullscreen="true" 
            scrolling="no" 
            height="378" 
            width="620"></iframe>
            </Container>
        </Jumbotron>
    )
}
export default Stream