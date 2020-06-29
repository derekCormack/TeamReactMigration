import React, { useState, useEffect } from 'react';
import Pancake from './pancakeComp';
import styles from './LinkedList.module.css';
import functions from './linkedbusiness.js';

function LinkedList()  {

  const [type, setType] = useState("gluten free");
  const [diameter, setDiameter] = useState(10);
  const [heatLevel, setHeatLevel] = useState("hot");
  const [stack, setStack] = useState(new functions.Stack);
  const [pancakeDisplay, setPancakeDisplay] = useState("Enter a Pancake");
  // const eeestacks = new Pancake.Stack()

// onChange={e => {
//   const val = e.target.value;
//   setMessage(prevState => {
//     return { ...prevState, message: val }
//   });
// }}
useEffect(() => {
  setType(document.getElementById("idType").value);
  setDiameter(document.getElementById("idDiameter").value);
  setHeatLevel(document.getElementById("idheatLevel").value);
});
function callType() {
  setType(document.getElementById("idType").value);
}
function callDiameter() {
  setDiameter(document.getElementById("idDiameter").value);
}
function callHeat() {
  setHeatLevel(document.getElementById("idheatLevel").value);
}
function createPancake() {
    //setType(document.getElementById("idType").value);
    // console.log(type)
    // setDiameter(12);
    // console.log(diameter)
    // setHeatLevel("cold");
    stack.insert(type,diameter,heatLevel)
    setPancakeDisplay(<Pancake 
                type =      {stack.get().type}
                diameter =  {stack.get().diameter}
                heatLevel = {stack.get().heatLevel} />)
    
  }

    return (
  
      <div style={{ textAlign:'center'}} >
        <br></br>
        <br></br>
        <h3> Linked list - Infinite Circle of Pancakes</h3>
        <input id="idType" onChange= {callType} placeholder = "Enter type of pancake "></input><br></br>
        <input id="idDiameter"   onChange= {callDiameter} placeholder = "Enter diameter in inches" ></input><br></br>
        <input id="idheatLevel" onChange= {callHeat} placeholder = "Enter Temperature in C"></input><br></br>
        <button onClick ={createPancake} style={{ color:'blue', fontWeight: 'bold'}}> create pancake </button>        
        
                  <div>
                    {pancakeDisplay}
 
          </div>
        
        
        <button style={{ color:'red', fontWeight: 'bold'}}> previous </button>
        <button style={{ color:'green', fontWeight: 'bold'}}> next </button>
        

      </div>
    )
  }

  export default LinkedList;


  