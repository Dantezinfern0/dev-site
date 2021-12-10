import React from 'react'
import {
    Container,
    Jumbotron,
    Col
} from 'reactstrap';
import Muldoon from '../images/MuldoonSite.png'

const Portfolio = () => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <Col>
                    <h1>Shopify store with Printful.com implementation and product design</h1>
                    <a 
                        href="https://www.johnmauricemuldoon.com"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={Muldoon} alt="screen shot of johnmauricemuldoon.com" width="800" height="600"  />
                    </a>
                    </Col>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default Portfolio