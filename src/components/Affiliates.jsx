import React from 'react'
import {
    Container,
    // Row,
    Col,
    Jumbotron
} from 'reactstrap';
import FriendLink from './FriendLink'
import Friends from '../data/Friends'

const Affiliates = () => {
    let shuffledFriends = Friends.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value)
    return <Jumbotron>
        <Container>
            <h1>Affiliate Links</h1>
            <Col>
                {shuffledFriends.map((f, i) => {return <FriendLink key={i} url={f.url} author={f.author} title={f.title} />})}
            </Col>
        </Container>
    </Jumbotron>
}

export default Affiliates