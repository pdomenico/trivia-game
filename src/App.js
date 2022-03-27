import './App.css';
import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

function App() {

  // State declarations
  const [gameStatus, setGameStatus] = React.useState("start")
  const [userChoices, setUserChoices] = React.useState({
    difficulty: "any",
    category: "any",
    number: "5"
  })

  // Function declarations
  function userChoose(event) {
    let {name, value} = event.target
    if (name === "question-number" && parseInt(value) > 10) value = "10"

    setUserChoices(prevChoice => ({
      ...prevChoice,
      [name]: value
    }))
  }

  React.useEffect(() => console.log(userChoices), [userChoices])


  return (
    <main className='main'>
      {
        gameStatus == "start" ?
        <Start
          startGame={() => setGameStatus("playing")}
          userChoose={userChoose}
        />
         :
        <Quiz 
          userChoices={userChoices}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
        />
      }
    </main>
  )
}

export default App;
