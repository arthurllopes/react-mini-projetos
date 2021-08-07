import React from 'react'

const Entry = ({ id, label, type, value, Change }) => {
    return (
        <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} value={value} id={id} onChange={Change} />
        </div>
    )
}

export default Entry
