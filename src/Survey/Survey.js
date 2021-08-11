import React from 'react'
import Input from './Components/Input';

const questions = [
    {
      question: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      answer: 'React.createElement()',
      id: 'p1',
    },
    {
      question: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      answer: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      question: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      answer: 'useFetch()',
      id: 'p3',
    },
    {
      question: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      answer: 'use',
      id: 'p4',
    },
  ];
const Survey = () => {

    const [answers, setAnswers] = React.useState(
        questions.reduce((acc, question) => (
            {...acc, [question.id]: ''}
        ), {})
    )

    function handleChange ({target}) {
        setAnswers({...answers, [target.name]: target.value})
        
    }

    const [slide, setSlide] = React.useState(0)
    const [finalResult, setFinalResult] = React.useState(0)

    function result (){
        const rightAnswers = questions.filter(({id, answer}) => (
            answers[id] === answer
        ))
        setFinalResult(`Acertou: ${rightAnswers.length} de ${questions.length}`)
    }

    function handleNext (){
        if(slide < questions.length - 1) {
            setSlide(prevState => prevState + 1)              
        } else {
            setSlide(null)
            result()
        }
    }

    function handlePrev (){
        if(slide>0) {
            setSlide(prevState => prevState - 1) 
        }
    }

    function remakeTest (){
        setFinalResult(0)
        setAnswers({})
        setSlide(0)
    }


    return (
        <form onSubmit={(event) => event.preventDefault()}>
            {questions.map ((question, index) => (
                <Input active={slide === index} key={question.id} value={answers[question.id]} Change={handleChange} {...question} />
            ))}
            {finalResult ? 
            <div>
                <p>{finalResult}</p>
                <button onClick={remakeTest}>Refazer Teste</button>
            </div>
            :
            <div>
                <button onClick={handlePrev}>Anterior</button>
                <button onClick={handleNext}>{slide < questions.length - 1 ? 'Proxima' : 'Finalizar'}</button>
            </div>}
        </form>
    )
}

export default Survey
