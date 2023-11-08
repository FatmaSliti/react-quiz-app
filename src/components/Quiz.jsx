import { useState } from "react";

import QUESTIONS from "../questions";
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    //computed value (derived value) : usually derived from the current state or the props of the component
    const activeQuestionIndex = userAnswers.length;


    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })
    };

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="trophy image" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffleAnswers.sort(() => Math.random() - 0.5)

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffleAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;

//tip: in react manage as little state as possible , derive as much state as possible
