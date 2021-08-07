import React from 'react'
import Form from './Components/Form'
import Result from './Components/Result'


const IMCCalculator = () => {
  const [weight, setWeight] = React.useState(null)
  const [height, setHeight] = React.useState(null)

  const [result, setResult] = React.useState(null)

  const [status, setStatus] = React.useState(null)

  const [healthWeight, setHealthWeight] = React.useState(null)
  const [adjustWeight, setNiceWeight] = React.useState(null)
  const [styleClass, setStyleClass] = React.useState(null)
  
  const calculateIMC = () => {
    const imc = Number((weight / (height/100) ** 2)).toFixed(2)
    setResult(imc)
    setWeight('')
    setHeight('')

    getStatus(imc)

    getHealthy(imc)
  }

  function getStatus (imc){
    if(imc < 18.5){
      setStatus('Abaixo do peso')
      setStyleClass('underweight')
    } else if (18.5 <= imc && imc < 24.9){
      setStatus('Normal')
      setStyleClass('normal')
    } else if (24.9 <= imc && imc <=34.9){
      setStatus('Acima do peso')
      setStyleClass('overweight')
    } else {
      setStatus('Obeso')
      setStyleClass('obese')
    }
  }

  function getHealthy (imc){
    if (imc< 18.5){
      const kg = Number((weight * 18.5)/imc).toFixed()
      const adjustWeight = weight - kg
      setHealthWeight(kg)
      setNiceWeight(adjustWeight)
    } else if (imc >= 24.9){
      const kg = Number((weight * 24.5)/imc).toFixed()
      const adjustWeight = weight - kg
      setHealthWeight(kg)
      setNiceWeight(adjustWeight)
    } else { setHealthWeight(null)}
  }

    return (
        <div>
          <Form calculate={calculateIMC} weight={weight} height={height} setWeight={setWeight} setHeight={setHeight} />
          {result && <Result status={status} result={result} adjustWeight={adjustWeight} healthWeight={healthWeight} styleClass={styleClass} />}
        </div>
    )
}

export default IMCCalculator
