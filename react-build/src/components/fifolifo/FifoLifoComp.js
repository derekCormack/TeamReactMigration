import React, { useState, useEffect } from 'react';
import FifoLifo from './FifoComp';
import fifoBusiness from './FifoBusiness';
import lifoBusiness from './LifoBusiness';

//derek- for later grab rando    items[items.length * Math.random() | 0]

const fifo = new fifoBusiness()
const lifo = new lifoBusiness()
  let lifoCustomer ="Waiting for Pancake";
  let fifoCustomer = "Waiting for Pancake";

function List() {

  const [name, setName] = useState("22");
  const [counter, setCounter] = useState(0);

  let fifoOutput = "Please enter Pancake";
  let lifoOutput = "Please enter Pancake";
  //   useEffect(() => {

  //     fifoOutput =name;
  // });

  function callName() {
    setName(document.getElementById("idName").value);
  }
  function onCreate() {
    lifo.pushZ(name)    //lifo instansiation pushed
    fifo.enQueue(name)
    console.log(lifo.data)
    setCounter(counter + 1)  //ensures re render
  }
  function onServe() {
    fifoCustomer=<FifoLifo key={2} pancake={fifo.data[0]} /> //create pancake on customer plate
    fifo.deQueue()  //illiminate first object in array
    lifoCustomer =<FifoLifo key={1} pancake={lifo.popZ()} />  // 1. put on customer plate, deletes from array
    console.log("click");
    setCounter(counter + 1)  // resets state.
  }


  if (fifo.data.length === 0) {
    fifoOutput = "Please enter Pancake";
    lifoCustomer = "Waiting for Pancake";
    fifoCustomer = "Waiting for Pancake";
  } else {
    let total = []
    for (var i = 0; i < fifo.data.length; i++) {
      total.push(<FifoLifo key={i} pancake={fifo.data[i]} />)

    }
    fifoOutput = total
  }
  if (lifo.data.length === 0) {
    lifoOutput = "Please enter Pancake"
  } else {
    let total = []
    for (var j = 0; j < lifo.data.length; j++) {
      total.push(<FifoLifo key={j} pancake={lifo.data[j]} />)

    }
    lifoOutput = total
  }
  return (

    <div>
      <div className="creator">
        <h1> ..........    </h1>

        <h2>Stampede Breakfast Pancake Machine </h2>

        <input id="idName" onChange={callName} placeholder="enter"></input>
        <button onClick={onCreate}>make pancake</button>
        <button onClick={onServe}>serve pancake</button>
      </div>
      <div className="left box ">
        <h3>LIFO(last in, first out) - hottest pancake served first </h3>

        {lifoCustomer}
        <div className="plate">Customer Plate</div>
        {lifoOutput}
        <div className="plate"></div>

      </div>
      <div className="right box">
        <h3>FIFO(first in, first out) - coldest pancake served first </h3>
        {fifoCustomer}
        <div className="plate">Customer Plate</div>
        {fifoOutput}
        <div className="plate"></div>

      </div>
      <h1>.............</h1>

    </div>
  );
}


export default List;
