import React,{useContext} from 'react'
import './Quiz.css'
import {Quizcontextdata} from './Quizroutepage';

function Quizstart() {
    const{curpage,upcurpage}=useContext(Quizcontextdata);
    return (
        <>
            <div className="pcont">
                <div className="quizdiv ">
                <div className="center">
                    <p className="h2 mb-5">Start Test</p>
                    <button className="btn btn-success" style={{width:"100px"}} onClick={()=>upcurpage(curpage+1)}>Start</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Quizstart
