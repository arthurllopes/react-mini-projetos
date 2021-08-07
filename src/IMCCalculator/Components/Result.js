import React from 'react';
import './Result.css'

const Result = ({result, status, healthWeight, adjustWeight, styleClass}) => {
    const positiveAdjustWeight = Math.abs(adjustWeight)
    const stylediv = {
        backgroundColor: '#eee',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '8px',
        maxWidth: '700px',
        fontSize: '1.2rem',
        margin: '0 auto',
    }
    return (
            <div className={styleClass} style={stylediv} >
                <p>Seu IMC é de: {result}</p>
                <p>Você está: <span><b>{status}</b></span></p>
                {healthWeight && <p>Seu peso ideal é de: {healthWeight} kg.</p>}
                {healthWeight && <p>Atualmente você precisa {adjustWeight > 0 ? 'perder':'ganhar'}: {positiveAdjustWeight} kg.</p>}
            </div>

    )
}

export default Result
