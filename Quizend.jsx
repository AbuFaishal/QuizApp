import React,{useContext} from 'react'
import './Quiz.css'
import {Quizcontextdata} from './Quizroutepage';

function Quizend() {
    const{finalscore,totalscore}=useContext(Quizcontextdata);
    return (
        <>
            <div className="pcont">
                <div className="quizdiv">
                    <div className="center">
                        <p className="h3">Your Test is over</p>
                        <p>Score: {finalscore}/{totalscore}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quizend
