import React from 'react'
import Entry from './Entry'
import './Form.css'
const Form = ({calculate, height, setHeight, weight, setWeight}) => {
    return (
        <div className="form">
            <Entry type="number" id="weight" label="Peso:" value={weight || ''} Change={(e) => setWeight(e.target.value)} />

            <Entry type="number" id="height" label="Altura:" value={height || ''} Change={(e) => setHeight(e.target.value)} />

            <button onClick={height && weight && calculate}>Calcular</button>
        </div>
    )
}

export default Form
