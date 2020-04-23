import React from 'react'
import avatar from '../images/dianavatar.png'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';



const Diana = () => {
    return <>
    <Jumbotron className="bg-dark text-primary">
        <Container>
            <Row>
                <Col>
                    <h1>Hello, I'm Diana</h1>
                    <img src={avatar} alt="Diana's avatar" />
                    <p>Diana is a master designer,<br />
                    she has an eye for what's cool</p>
                </Col>
                <Col>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae libero labore excepturi. Doloremque sint, natus 
                    placeat ullam dolor at dicta quo culpa tempora eveniet quod 
                    quidem cumque ea voluptatum neque!
                    <img href="http://projectchangemaryland.org/wp-content/uploads/2016/09/presentation.design.jpg" alt="something" /> 
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    </>
}

export default Diana