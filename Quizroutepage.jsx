import React,{useState,createContext} from 'react'
import Quizstart from './Quizstart';
import Quizpage from './Quizpage';
import Quizend from './Quizend';

export const Quizcontextdata=createContext();
function Quizroutepage() {
    
    const[curpage,upcurpage]=useState(0);
    const[finalscore,upfinalscore]=useState(0);
    const[totalscore,uptotalscore]=useState(0);
    //calling page based on the usestate value
    return (
        <>
        <Quizcontextdata.Provider value={{curpage,upcurpage,finalscore,upfinalscore,totalscore,uptotalscore}}>
            {curpage===0 && <Quizstart/>}
            {curpage===1 && <Quizpage/>}
            {curpage===2 && <Quizend/>}
        </Quizcontextdata.Provider>
        </>
    )
}

export default Quizroutepage
