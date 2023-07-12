import React from 'react';
import { MyContext } from './MyContext';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Main from './Components/Main';
import Footer from './Components/Footer';
import Quiz from './Quiz';
import { useState } from 'react';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Question from './Question';
import QuizResult from './QuizResult';
import Nav from './Components/Nav';

//inside return there will be a context funtion that wil wrape all the content


function App() {
  const [counter,Setcounter]=useState(0);
  const [score,setScore]=useState(0);
  const [correct,setCorrect]=useState(0);
  const [quiz,setQuiz]=useState(false);
  const [result,setResult]=useState(false);
  const[unable,setUnable]=useState(true)
  
  const[blur,setBlur]=useState(false)
  
  const handleContinue=()=>
  { 
    if(counter===Question.length-1)
    handleQuit()
    else
    handleQuiz()

  }
  const handleQuiz=()=>
  { 
    setQuiz(true)

  }
  const handleResult=()=>{
    setResult(true)
    setQuiz(false)
  }
  const handleQuit=()=>
  { 
    Setcounter(0)
    setCorrect(0)
    setScore(0)
    setQuiz(false)
    setResult(false)
  }
  const handleRight=(iscorrect)=>
  {
    setUnable(false)
    if(iscorrect)
    {
      setCorrect(correct+1)
      setScore(score+5)
    }
    else
    {

    }
  }
  const handleNext=()=>
  {
    setUnable(true)
    if(counter!==Question.length-1)
    Setcounter(counter+1)
    else
    {
      setResult(true)
      setQuiz(false)
    }
  }
  const handleScore=()=>
  {
    setResult(true)
  }

  return (
    
    <div className='app'>
      <MyContext.Provider value={{unable,score,correct,result,setResult,counter,Setcounter,handleNext,handleRight,handleScore,handleQuiz,handleQuit,handleResult,handleContinue,blur,setBlur}}>
        
          <Navbar/>
          {/* <Nav/> */}
          <Section1/>  
          {/* <Section2/> */}
          {
            quiz===true
            ?
            (<Quiz/>)
            :
            (result===true
              ?
              <QuizResult/>
              :
              <Section3/>
            )
          }
          <Section4/>
          <Section5/>
          <Section6/>
          

          <Footer/> 
      </MyContext.Provider>
    </div>
  
  
  )
}

export default App;
