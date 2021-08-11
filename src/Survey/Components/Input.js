import React from 'react'

const Input = ({question, options, id, value, Change, active }) => {
    if(!active) return null 
    return (
        <fieldset>
            <legend>{question}</legend>
            {options.map((option) => (
                <label key={option}>
                    <input type="radio" name={id} checked={value === option} value={option} onChange={Change} />
                    {option}
                </label>
            ))}
        </fieldset>
    )
}

export default Input
