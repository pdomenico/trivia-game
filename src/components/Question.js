import React from 'react';
import Answer from "./Answer"
const he = require("he")
const {nanoid} = require("nanoid")

export default function Question({data, gameStatus, selectAnswer}) {

    // function selectAnswer(text) {
    //     setAnswers(prevAnswers => {
    //         return prevAnswers.map(answer => {
    //             if (answer.text !== text) {
    //                 return {
    //                     ...answer,
    //                     isSelected: false
    //                 }
    //             }
    //             return {
    //                 ...answer,
    //                 isSelected: !answer.isSelected
    //             }
    //         })
    //     })
    // }
    
    function renderAnswers() {
        return data.answersArray.map(a => {
            return <Answer
                key={a.id}
                text={a.text}
                isCorrect={a.isCorrect}
                isSelected={a.isSelected}
                gameStatus={gameStatus}
                selectAnswer={() => selectAnswer(a.id)}
            />
        })
    }
    
    return (
        <div className='question-div'>
            <p className='question-text'>{he.decode(data.question)}</p>
            {renderAnswers()}
        </div>
    )
}