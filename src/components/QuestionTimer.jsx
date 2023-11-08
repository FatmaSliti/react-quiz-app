import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {

    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        setTimeout(() => {
            onTimeout();
        }, timeout)
    }, [timeout, onTimeout])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 1000)
        }, 1000)
    })

    return <progress id='question-time' max={timeout} value={remainingTime} />
}

export default QuestionTimer
