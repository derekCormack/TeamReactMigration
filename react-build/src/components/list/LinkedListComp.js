import React, { useState } from 'react';
import Pancake from './pancakeComp';
// import styles from './LinkedList.module.css';
import functions from './linkedbusiness.js';

const stack = new functions.Stack()

function LinkedList() {

  const [type, setType] = useState("gluten free");
  const [diameter, setDiameter] = useState(10);
  const [heatLevel, setHeatLevel] = useState("hot");
  //const [stack, setStack] = useState(new functions.Stack);
  // const [pancakeDisplay, setPancakeDisplay] = useState("Enter a Pancake");
  const [counter, setCounter] = useState(0);


  function callType() {
    setType(document.getElementById("idType").value);
  }

  function callDiameter() {
    setDiameter(Number(document.getElementById("idDiameter").value));
  }

  function callHeat() {
    setHeatLevel(document.getElementById("idheatLevel").value);
  }

  function createPancake() {
    stack.insert(type, diameter, heatLevel)//sets first node, instantiate 1st pancake
    console.log(stack.get());
    setCounter(counter + 1);
  }

  function onPrevious() {
    setCounter(counter + 1)
    stack.prev()  // go to PREVIOUS node in STACK
  }
  function onNext() {
    setCounter(counter + 1);
    stack.next(); // go to NEXT node in STACK
  }

  function onFirst() {
    setCounter(counter + 1);
    stack.firstNode();
  }

  function onLast() {
    setCounter(counter + 1);
    stack.lastNode();
  }
  function onDelete() {
    stack.delete()
    setCounter(counter + 1);
  }
  // console.log("---",stack.get());

  let output;

  if (stack.get()) {

    output = <Pancake
      id={stack.get().id}    //  display pancake   
      type={stack.get().type}
      diameter={stack.get().diameter}
      heatLevel={stack.get().heatLevel} />

  } else {

    output = "Please Enter a Pancake";
  }
 
  return (

    <div style={{ textAlign: 'center' }} >
      <br></br>
      <br></br>
      <h3> Linked list - Infinite Circle of Pancakes</h3>

      <input id="idType" onChange={callType} placeholder="Enter type of pancake "></input><br></br>
      <input id="idDiameter" onChange={callDiameter} type="number" placeholder="Enter diameter in inches" ></input><br></br>
      <input id="idheatLevel" onChange={callHeat} placeholder="Enter Temperature in C"></input><br></br>

      <button onClick={createPancake} style={{ color: 'blue', fontWeight: 'bold' }}> create pancake </button>  <br></br>

      <h3> {output}</h3>

      <button onClick={onFirst} style={{ color: 'purple', fontWeight: 'bold' }}> First </button>
      <button onClick={onPrevious} style={{ color: 'orange', fontWeight: 'bold' }}> previous </button>
      <button onClick={onNext} style={{ color: 'green', fontWeight: 'bold' }}> next </button>
      <button onClick={onLast} style={{ color: 'purple', fontWeight: 'bold' }}> Last </button><br></br>
      <button onClick={onDelete} style={{ color: 'red', fontWeight: 'bold' }}> Delete Current </button><br></br>

      {stack.totalNodes()}

    </div>
  )
}

export default LinkedList;


