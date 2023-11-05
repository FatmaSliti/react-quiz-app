import { useState } from "react";

import QUESTIONS from "../questions";

const Quiz = () => {
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    //computed value (derived value) : mostly derived from the current state or the props of the component
    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = () => { };

    return (
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                    <li key={answer} className="answer">
                        <button onClick={handleSelectAnswer}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;

//tip: in react manage as little state as possible , derive as much state as possible
