import React from 'react';
const he = require("he")

export default function Answer(props) {
    
    function getClassName() {
        const {gameStatus, isCorrect, isSelected} = props
        if (gameStatus === "end") {
            if (isCorrect) return " answer-button-correct"
            if (isSelected) return " answer-button-incorrect"
        }
        if (isSelected) return " answer-button-selected"
        return ""
    }

    return (
        <button
            className={`answer-button${getClassName()}`}
            onClick={props.selectAnswer}
        >
            {he.decode(props.text)}
        </button>
    )
}