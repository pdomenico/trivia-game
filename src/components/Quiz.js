import React from 'react';
import Question from "./Question"
const {nanoid} = require("nanoid")


export default function Quiz(props) {

    // State declarations
    const [quiz, setQuiz] = React.useState([])

    // Effects
    React.useEffect(newQuiz, [])
    
    // Helper functions
    function newQuiz() {
        // Build the API URL
        const {number, category, difficulty} = props.userChoices
        let url = `https://opentdb.com/api.php?amount=${number}` 
        if (category !== "any") url += `&category=${category}`
        if (difficulty !== "any") url += `&difficulty=${difficulty}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let finalQuiz = data.results.map(question => {
                    let answersArray = []
                    for (const incorrect_answer of question.incorrect_answers) {
                        answersArray.push({
                            text: incorrect_answer,
                            isCorrect: false,
                            isSelected: false,
                            id: nanoid()
                        })
                    }
                    answersArray.push({
                        text: question.correct_answer,
                        isCorrect: true,
                        isSelected: false,
                        id: nanoid()
                    })
        
                    answersArray = answersArray.map(value => ({ value, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({ value }) => value)
        
                    return {
                        ...question,
                        id: nanoid(),
                        answersArray: answersArray
                    }
                })
                setQuiz(finalQuiz)
            })
    }
    
    function selectAnswer(questionId, answerId) {
        setQuiz(prevQuiz => prevQuiz.map(question => {
            if (question.id !== questionId) return question

            let answersArray = []
            for (const answer of question.answersArray) {
                if (answer.id !== answerId) answersArray.push({
                    ...answer,
                    isSelected: false
                })
                else answersArray.push({
                    ...answer,
                    isSelected: !answer.isSelected
                })
            }
            return {
                ...question,
                answersArray: answersArray
            }
        }))
    }


    function formatQuestions() {
        return quiz.map(q => (
            <div className='quiz-single' key={nanoid()}>
                <Question
                    data={q}
                    key={q.id}
                    gameStatus={props.gameStatus}
                    selectAnswer={answerId => selectAnswer(q.id, answerId)}
                />
                <hr className='quiz-separator' key={nanoid()}></hr>
            </div>
        ))
    }

    function handleClick() {
        if (props.gameStatus === "playing") props.setGameStatus("end")
        if (props.gameStatus === "end") props.setGameStatus("start")
    }
    
    function getCorrectAnswers() {
        let count = 0
        for (const question of quiz) {
            for (const answer of question.answersArray) {
                if (answer.isCorrect && answer.isSelected) count++
            }
        }
        return count
    }

    return (
        <div className='quiz-div'>
            {
                quiz &&
                formatQuestions()
            }
            {
                <div className='button-and-score-div'>
                    {
                        props.gameStatus === "end" &&
                        <p className='score'>
                            You scored {getCorrectAnswers()}/{props.userChoices.number} correct answers
                        </p>
                    }
                    {
                        quiz &&
                        <button
                            className='quiz-button'
                            onClick={handleClick}
                        >
                            {props.gameStatus === "playing" ? "Check answers" : "New questions"}
                        </button>
                    }
                </div>
            }
        </div>
    )
}