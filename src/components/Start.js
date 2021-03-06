import React from 'react';

export default function Start(props) {
    return (
        <div className='start-div'>
            <h1 className='start-header'>Quizzical</h1>
            <p className='start-description'>A trivia game</p>

            <div className='choices-div'>
                <div className='choice-div'>
                    <label htmlFor="favColor">Choose difficulty</label>
                    <br />
                    <select
                        name="difficulty"
                        onChange={props.userChoose}
                    >
                        <option value="any">Any difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className='choice-div'>
                    <label htmlFor="favColor">Choose category</label>
                    <br />
                    <select
                        name="category"
                        onChange={props.userChoose}
                    >
                        <option value="any">Any Category</option>
			            <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                </div>

                <input
                    placeholder="Number of questions (1-10)"
                    onChange={props.userChoose}
                    name="number"
                    className='input-amount'
                />
            </div>

            <button className='start-button' onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}