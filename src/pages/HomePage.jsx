import React from 'react'
import Dante from '../pages/Dante'
import Main from '../components/Main'
import Rotator from '../components/Rotator'
import WeatherWidget from '../pages/WeatherWidget'
import {
    Container,
    // Row,
    // Col,
    Jumbotron
} from 'reactstrap';

const HomePage = () => {
    return <div>
        <Jumbotron>
            <Container>
                <Dante />
                <Main />
                <Rotator />
                <WeatherWidget />
            </Container>
        </Jumbotron>
    </div>
}

export default HomePage