import React from 'react'
import Dante from '../pages/Dante'
import Main from '../components/Main'
import Rotator from '../components/Rotator'
import WeatherWidget from '../pages/WeatherWidget'
import {
    Container,
    Row,
    // Col,
    Jumbotron
} from 'reactstrap';

const HomePage = () => {
    return <div>
        <Main />
        <Dante />
        <WeatherWidget />
        <Jumbotron>
            <Container>
                <Row>
                    <h1>
                        Projects
                    </h1>
                    <Rotator />
                </Row>
            </Container>
        </Jumbotron>
    </div>
}

export default HomePage