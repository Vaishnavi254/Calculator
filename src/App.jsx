import Display from './components/display';
import styles from'./App.module.css'
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
import Heading from './components/Heading';
function App() {
   let [calVal,setCalVal]=useState("");
 const buttonclick=(buttonText)=>{
  if(buttonText==='C')
  { 
    setCalVal("");
  }
  else if(buttonText==='='){
   const result=eval(calVal);
   setCalVal(result);
  }
  else{
    const newDisplayval= calVal + buttonText;
    setCalVal(newDisplayval);
  }
 }
  return <div className={styles.calculator}>
    <Heading></Heading>
    <Display displayval={calVal}></Display>
    <ButtonsContainer onbuttonclick={buttonclick}></ButtonsContainer>
  </div>;
}

export default App
