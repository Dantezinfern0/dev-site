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
                    <div className="pad">
                    <Col>
                    <h1>Shopify store with Printful.com implementation and product design</h1>
                    <div className="center-it"><a 
                        href="https://www.johnmauricemuldoon.com"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={Muldoon} alt="screen shot of johnmauricemuldoon.com" width="800" height="600"  />
                    </a></div>
                    </Col>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default Portfolio