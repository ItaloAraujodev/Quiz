import React, { useContext} from 'react'
import Quiz from "../img/quiz.svg";
import { QuizContext } from "../context/quiz"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button 
          onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Iniciar
        </button>
        <img src={ Quiz } alt='quiz'  />
    </div>
  )
}

export default Welcome;
