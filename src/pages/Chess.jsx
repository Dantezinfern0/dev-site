import React from "react";

const Chess = () => {
    return (
        <div className="chess-container">
            <h1>Daily Chess Puzzle</h1>
            <div>
            <iframe title="chess puzzle"
                src="https://lichess.org/training/frame?theme=newspaper&bg=dark" 
                width="400px" 
                height="444px" 
                allowtransparency="true" 
                frameBorder="0"
                crossOrigin="true"></iframe>
            </div>
            <h1>Chess TV</h1>
            <div>
            <iframe title="ChessTV from Lichess.org" 
                src="https://lichess.org/tv/frame?theme=brown&bg=dark" 
                width="400px"
                height="444px"
                allowtransparency="true" 
                frameBorder="0" 
                crossOrigin="true"></iframe>
            </div>
        </div>
    )
}
export default Chess