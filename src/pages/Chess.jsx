import React, {useState} from 'react'
import Spinner from 'react-spinkit';
import {
    Container,
    Jumbotron
} from 'reactstrap';

const Chess = () => {
    const [loadingPuzzle, setLoadingPuzzle] = useState(true)
    const [loadingTv, setLoadingTv] = useState(true)
    return (<Jumbotron>
        <Container>
        <div className="chess-container">
            <h1>Daily Chess Puzzle</h1>
            <div>
            {loadingPuzzle ? (<Spinner
                className="loading text-center"
                name="three-bounce"
                color="white"
                fadeIn="none"
            />) : null}
            <iframe title="chess puzzle"
                src="https://lichess.org/training/frame?theme=newspaper&bg=dark" 
                width="400px" 
                height="444px" 
                allowtransparency="true" 
                frameBorder="0"
                crossOrigin="true"
                onLoad={() => setLoadingPuzzle(false)}
                ></iframe>
            </div>
            <h1>Chess TV</h1>
            <div>
            {loadingTv ? (<Spinner
                className="loading text-center"
                name="three-bounce"
                color="white"
                fadeIn="none"
            />) : null}
            <iframe title="ChessTV from Lichess.org" 
                src="https://lichess.org/tv/frame?theme=brown&bg=dark" 
                width="400px"
                height="444px"
                allowtransparency="true" 
                frameBorder="0" 
                crossOrigin="true"
                onLoad={() => setLoadingTv(false)}
                ></iframe>
            </div>
        </div>
        </Container>
        </Jumbotron>
    )
}
export default Chess