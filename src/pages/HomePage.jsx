import React from 'react'
import Dante from '../pages/Dante'
import Main from '../components/Main'
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
                
                <WeatherWidget />
            </Container>
        </Jumbotron>
    </div>
}

export default HomePage