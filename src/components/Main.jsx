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
                <h1>About DankDevTeam</h1>
                <p>We are a team focused on making your business better.</p>
                <h2>List of our services</h2>
                <ul>
                    <li>Web development</li>
                    <li>Web design</li>
                    <li>Brand image</li>
                    <li>eCommerce stores</li>
                    <li>Content creation</li>
                    <li>Marketing strategy</li>
                    <li>SEO & analytics</li>
                    <li>Creative direction</li>
                    <li>Shopify</li>
                    <li>Logos</li>
                </ul>
            </Col>
        </Container>
    </Jumbotron>
    </>
}
export default Main