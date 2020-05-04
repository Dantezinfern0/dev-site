import React, {useState, useEffect} from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
} from 'reactstrap';

const TipCalc = () => {
    const [check, setCheck] = useState(0)
    const [twenty, setTwenty] = useState(0)
    const [fifteen, setFifteen] = useState(0)
    const [ten, setTen] = useState(0)
    const [total20, setTotal20] = useState(0)
    const [total15, setTotal15] = useState(0)
    const [total10, setTotal10] = useState(0)
    const [isReady, setIsReady] = useState(false)

    const calc = () => {
        setTwenty((check * 0.2).toFixed(2))
        setFifteen((check * 0.15).toFixed(2))
        setTen((check * 0.1).toFixed(2))
        setTotal20((check * 1.2).toFixed(2))
        setTotal15((check * 1.15).toFixed(2))
        setTotal10((check * 1.1).toFixed(2))
        setIsReady(true)
    }
    const commas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    useEffect(() => {
        const input = document.getElementById("checkAmount");
        input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("tipButton").click();
    }
        return () => {
            document.removeEventListener("keyup", input);
          };
},[]);
    })
    return <Jumbotron>
        <Container>
            <Col>
                <Row>
                    <h1>Tip Calculator</h1>
                </Row>
                <Row>
                    <Col>
                    <label for="userInput">Input check total here</label>
                    <input onChange={e => setCheck(e.target.value)} 
                        type="number" 
                        size="10" 
                        id="checkAmount" 
                        name="userInput"
                        placeholder="check amount.."
                     />
                    <Button id="tipButton"onClick={() => calc()}>Calculate</Button>
                    </Col>
                    <Col>
                        <h4>20%</h4>
                        <p>${isReady ? commas(twenty) : "0.00"}</p>
                        <p>Total:${isReady ? commas(total20) : "0.00"}</p>
                    </Col>
                    <Col>
                        <h4>15%</h4>
                        <p>${isReady ? commas(fifteen) : "0.00"}</p>
                        <p>Total:${isReady ? commas(total15) : "0.00"}</p>
                    </Col>
                    <Col>
                        <h4>10%</h4>
                        <p>${isReady ? commas(ten) : "0.00"}</p>
                        <p>Total:${isReady ? commas(total10) : "0.00"}</p>
                    </Col>
                </Row>
            </Col>
        </Container>
    </Jumbotron>
}
export default TipCalc