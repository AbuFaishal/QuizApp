import React,{useState,useEffect,useContext,createContext} from 'react'
import './Quiz.css'
import quiz from './Quizbank.json'
import {Quizcontextdata} from './Quizroutepage';

function Quizpage() {
    const{upcurpage,upfinalscore,uptotalscore}=useContext(Quizcontextdata);
    const[curquiz,upcurquiz]=useState(0);
    const[marks,totalmarks]=useState(0);
    const[count,upcount]=useState(0);
    
    const checker=(option)=>{
        if(option===quiz[curquiz].answer){
            totalmarks(marks+1);
        }
        upcount(0);
        if(curquiz!==quiz.length-1){//because curquiz start from 0 and go upto last index of quiz
            upcount(0);
            upcurquiz(curquiz+1);
        }
        else{
            upfinalscore(marks);
            uptotalscore(quiz.length-1);
            upcurpage(2);
        }
    }
    const scorepage=()=>{
        upfinalscore(marks);
        uptotalscore(quiz.length-1);
        upcurpage(2);
    }
    useEffect(() => {
        
            const interval = setInterval(() => {
                if(count<10)
            {
                upcount(count+1);
            }
            else{
                if(curquiz!==quiz.length-1){
                    upcount(0);
                    upcurquiz(curquiz+1);
                }
                else if(curquiz===quiz.length-1){
                    clearInterval(interval);
                }
                else{
                    upfinalscore(marks);
                    uptotalscore(quiz.length-1);
                    upcurpage(2);
                }
            }
              }, 1000);

          return () => clearInterval(interval);
    })
    
    return (
        <>
            <div className="pcont">
                <div className="quizdiv">
                {curquiz!==quiz.length-1?<>
                    <div className="quiz">
                        <p className="h2">Question {curquiz+1}/<span>{quiz.length-1}</span></p>
                        <p className="h4 mt-3">{quiz[curquiz].question}</p>
                        <div className="counter">
                            <span>{count}</span>
                        </div>
                    </div>
                    <div className="ans">
                        <button className="but" onClick={()=>checker(1)}>{quiz[curquiz].option1}</button>
                        <button className="but" onClick={()=>checker(2)}>{quiz[curquiz].option2}</button>
                        <button className="but" onClick={()=>checker(3)}>{quiz[curquiz].option3}</button>
                        <button className="but" onClick={()=>checker(4)}>{quiz[curquiz].option4}</button>
                    </div>
                    </>:
                    <div className="center">
                        <p className="h2">Test Over</p>
                        <button className="btn btn-warning" onClick={()=>scorepage()}>Check score</button>
                    </div>
                }
                </div>
            </div>
        </>
    )
}

export default Quizpage
