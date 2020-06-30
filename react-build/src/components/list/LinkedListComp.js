import React, { useState, useEffect } from 'react';
import Pancake from './pancakeComp';
import styles from './LinkedList.module.css';
import functions from './linkedbusiness.js';

const stack = new functions.Stack()

function LinkedList() {

  const [type, setType] = useState("gluten free");
  const [diameter, setDiameter] = useState(10);
  const [heatLevel, setHeatLevel] = useState("hot");
  //const [stack, setStack] = useState(new functions.Stack);
  const [pancakeDisplay, setPancakeDisplay] = useState("Enter a Pancake");
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   setType(document.getElementById("idType").value);
  //   setDiameter(document.getElementById("idDiameter").value);
  //   setHeatLevel(document.getElementById("idheatLevel").value);
  // });


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
    if (pancakeDisplay === "Enter a Pancake") {
      return 0
    }

    stack.prev()  // go to PREVIOUS node in STACK
    console.log(stack.get())
    }
  function onNext() {
    if (pancakeDisplay === "Enter a Pancake") {
      return 0
    }

    stack.next(); // go to NEXT node in STACK
  }

  function onFirst() {
    if (pancakeDisplay === "Enter a Pancake") {
      return 0
    }

    stack.firstNode();

  }

  function onLast() {
    if (pancakeDisplay === "Enter a Pancake") {
      return 0
    }

    stack.lastNode();

  }
  console.log("---",stack.get());
  let myId;
  let output;  

  if (stack.get()) {
    myId = stack.get().id;
    output = <Pancake
        id={stack.get().id}    //  display pancake   
        type={stack.get().type}
        diameter={stack.get().diameter}
        heatLevel={stack.get().heatLevel} />

  } else {

    myId = "not set yet";
    output = "";
    
  }
  // console.log(stack)
  return (

    <div style={{ textAlign: 'center' }} >
      <br></br>
      <br></br>
      <h3> Linked list - Infinite Circle of Pancakes</h3>

      <input id="idType" onChange={callType} placeholder="Enter type of pancake "></input><br></br>
      <input id="idDiameter" onChange={callDiameter} placeholder="Enter diameter in inches" ></input><br></br>
      <input id="idheatLevel" onChange={callHeat} placeholder="Enter Temperature in C"></input><br></br>

      <button onClick={createPancake} style={{ color: 'blue', fontWeight: 'bold' }}> create pancake </button>  <br></br>

  <h1>{myId} {counter}</h1>
      {/* {pancakeDisplay}<br></br> */}

      <button onClick={onFirst} style={{ color: 'purple', fontWeight: 'bold' }}> First </button>
      <button onClick={onPrevious} style={{ color: 'red', fontWeight: 'bold' }}> previous </button>
      <button onClick={onNext} style={{ color: 'green', fontWeight: 'bold' }}> next </button>
      <button onClick={onLast} style={{ color: 'purple', fontWeight: 'bold' }}> Last </button><br></br>
      
      {/* {stack.totalNodes()} */}

    </div>
  )
}

export default LinkedList;


