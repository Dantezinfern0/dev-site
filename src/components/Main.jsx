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
                <h2>List of my services</h2>
                <ul>
                    <li>Web development</li>
                    <li>Web design</li>
                    <li>Brand image</li>
                    <li>eCommerce stores</li>
                    <li>Content creation</li>
                    <li>Marketing strategy</li>
                    <li>SEO & analytics</li>
                    <li>Shopify</li>
                    <li>Logos</li>
                </ul>
            </Col>
        </Container>
    </Jumbotron>
    </>
}
export default Main