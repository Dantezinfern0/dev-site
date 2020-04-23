import React from 'react'
import {
    Container,
    // Row,
    Col,
    Jumbotron
} from 'reactstrap';

const Main = () => {
    return <>
    <Jumbotron>
        <Container>
            <Col>
                <h1>Intro about DankDevTeam</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint dolorum voluptates incidunt neque, delectus quam odit aliquid dicta laboriosam modi. Cumque harum enim labore omnis, temporibus nam repudiandae architecto?</p>
                <h2>List of our services</h2>
                <ul>
                    <li>SEO</li>
                    <li>Design</li>
                    <li>Shopify</li>
                    <li>Logos</li>
                    <li>Cat Poop</li>
                </ul>
            </Col>
        </Container>
    </Jumbotron>
    </>
}
export default Main