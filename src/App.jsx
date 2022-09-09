import React, { useContext, useEffect } from "react";
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import GameOver from './components/GameOver';
import './App.css'
import "./components/welcome.css"

import { QuizContext } from "../src/context/quiz"

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      {quizState.gameStage === "start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
