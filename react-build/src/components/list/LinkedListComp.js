import React from 'react';
import Pancake from './pancakeComp';
import styles from './LinkedList.module.css';
const LinkedList = () => {

    return (
  
      <div style={{ textAlign:'center'}} >
        <br></br>
        <br></br>
        <h3> Linked list - Infinite Circle of Pancakes</h3>
        <input placeholder = "Enter type of pancake "></input><br></br>
        <input placeholder = "Enter diameter in inches" ></input><br></br>
        <input placeholder = "Enter Temperature in C"></input><br></br>
        <button style={{ color:'blue', fontWeight: 'bold'}}> create pancake </button>        
        
                  <div>
            <Pancake 
                type =      {"wheat"}
                diameter =  {10}
                heatLevel = {"cold"} />
          </div>
        
        
        <button style={{ color:'red', fontWeight: 'bold'}}> previous </button>
        <button style={{ color:'green', fontWeight: 'bold'}}> next </button>
        

          
          

      </div>
    )
  }

  export default LinkedList;


  