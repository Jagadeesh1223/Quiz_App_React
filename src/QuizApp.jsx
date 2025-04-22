import React from "react";
import {data} from './data';
import { useState } from "react";
import'./style.css';
export default function QuizApp() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [quizStart, setQuizStart] = useState(false);
    const [option, setOption] = useState(null);

    // These below options are correct all Questions by order first Question to last Question.
    const correctAns = ['option2'// 1st Question Ans
        ,'option3' // 2nd Question Ans
        ,'option2', // 3rd Question Ans
        'option2','option3',
        'option2','option2','option3','option2','option2','option2','option3',
        'option4','option3','option2','option2','option1','option3','option3',
        'option2'];

    const handleStart = (start) => {
        setQuizStart(start); // it is handle the start button
    }
    const handleSelect = (selectedopt) => {
        setOption(selectedopt);
    }
    // it is uesed to handle the NEXT button by moving next Question
    const handleNext = () => {
        if(option === correctAns[index]) {
            setScore(score+1);
        }
        if(index<data.length-1) {
            setIndex(index+1);
            setOption(null);
        } else {
            setQuizFinished(true);
        }
    }
    // After click on the submit button you get below window
    if(quizFinished) {
        return (
            <div className="quiz">
                <h1>QuizFinished..!</h1>
                <h3>Your Score is : {score} / {data.length}</h3>
            </div>
        )
    }
    // Before go to the Quiz. 
    if(!quizStart) {
        return (
            <div className="quiz">
                <h1>Let's Start the Quiz</h1>
                <h3>Total Number Questions : {data.length}</h3>
                <button onClick= {() => handleStart(true)}>Start</button>
            </div>
        )
    }
     // it is uesed to handle the Previous button by moving previous Question
    const handlePrev = () => {
        if(index>0) 
        setIndex(index-1);
    }
    // When click on the Start button the return function is get
    if(quizStart) {
        
    return (
        
        <div className="quiz">
            
            <h2>Quiz App</h2>
            
            <h3>{index+1} ) {data[index].Queston}</h3>
            <ul>
                <li className={ option === 'option1' ? 'selected': '' }
                    onClick={()=>handleSelect('option1')}>{data[index].option1}</li>
                <li className={ option === 'option2' ? 'selected' : '' }
                    onClick={()=>handleSelect('option2')}>{data[index].option2}</li>
                <li className={ option === 'option3' ? 'selected' : '' }
                    onClick={()=>handleSelect('option3')}>{data[index].option3}</li>
                <li className={ option === 'option4' ? 'selected' : '' }
                    onClick={()=>handleSelect('option4')}>{data[index].option4}</li>
            </ul>
            <div>
            {index === 0 ? "" : <button onClick={handlePrev}>Previous</button>}
            <button onClick={handleNext} disabled = {!option} className = "buttonnext">{index === data.length-1 ? "Submit" : "Next"}</button>
            </div>
            <h5>Question {index+1} of {data.length}</h5>
        </div> 
    );
    }
}
