import React, { useState } from 'react'
import '../styles/colorpicker.css'
import {
    Container,
    Jumbotron
} from 'reactstrap';

export default function Colors() {
  const rdm359 = () => {
    return Math.random() * 359
  }
  const rdm100 = () => {
    return Math.random() * 100
  }
  
  const randomIz = () => {
    setHValue(rdm359)
    setSValue(rdm100)
    setLValue(rdm100)
    setHValue2(Math.abs(hValue - 180))
    setSValue2(Math.abs(sValue - 35))
    setLValue2(Math.abs(lValue - 35))
    setAValue(Math.abs(aValue - 35))
  }
  const fork = (a,b) => {
    if (a === 'hue') {
        setHValue(b)
        setHValue2(Math.abs(b - 180))
    } else if (a === 'sat') {
        setSValue(b)
        setSValue2(Math.abs(b - 50))
    } else if (a === 'light')  {
        setLValue(b)
        setLValue2(Math.abs(b - 50))
    } else if (a === 'a') {
        setAValue(b)
    }
  }
  const [hValue, setHValue] = useState(rdm359())
  const [sValue, setSValue] = useState(rdm100())
  const [lValue, setLValue] = useState(rdm100())
  const [aValue, setAValue] = useState(0.95)
  const [hValue2, setHValue2] = useState(335)
  const [sValue2, setSValue2] = useState(0.89)
  const [lValue2, setLValue2] = useState(0.32)
  const [aValue2, setAValue2] = useState(0.95)
  // console.log({sValue, hValue, lValue})
  
  return (
      <Jumbotron>
    <Container>
     <h1 className="title">Color Picker</h1>
      <main className="flex-it colors-container">
        <div className="three-buttons">
          <h6>Hue {Math.ceil(hValue)}˚</h6>
          <div>
            <input
              onChange={event => fork('hue', event.target.value)}
              type="range"
              min="0"
              max="359"
              name="hue"
              step="1"
              value={hValue}
            />
          </div>
          <h6>Saturation {Math.ceil(sValue)}%</h6>
          <div>
            <input
              onChange={event => fork('sat', event.target.value)}
              type="range"
              min="0"
              max="100"
              name="saturation"
              step="1"
              value={sValue}
            />
          </div>
          <h6>Lightness {Math.ceil(lValue)}%</h6>
          <div>
            <input
              onChange={event => fork('light', event.target.value)}
              type="range"
              min="0"
              max="100"
              name="lightness"
              step="1"
              value={lValue}
            />
          </div>
          <h6>Opacity {Math.round(100 * aValue)}%</h6>
          <div>
            <input
              onChange={event => fork('a', event.target.value)}
              type="range"
              min="0"
              max="1"
              name="lightness"
              step="0.01"
              value={aValue}
            />
          </div>
        </div>
        <button
          style={{
            backgroundColor: `hsla(${hValue},${sValue}%,${lValue}%,${aValue})`,
            borderRadius: '12px'
          }}
          onClick={() => {
            randomIz()
          }}>
          <h3 style={{
              color: `hsla(${hValue2},${sValue2}%,${lValue2}%,${aValue2})`
              }} >
            Click Inside This Box <br />
            To Randomize Settings <br />
            {'<---Play With the Slider Bars'} <br />
            {'(text color dynamically changes with the background to stay visible)'}
          </h3>
        </button>
      </main>
    </Container>
    </Jumbotron>
  )
}