import React from 'react';


const List = () => {

  return (

    <div>
      
    <h1>.</h1>  
    <h2>Stampede Breakfast Pancake Machine </h2>
    <h3>LIFO - coldest pancake served first </h3>
      
      <input placeholder="enter"></input>
      
      <button>make pancake</button>
      <button>insert</button>
      <button>delete</button>
      <button>serve pancake</button>
    
      <h1></h1>
    
      <button id= "1">___1___</button>
      <button id= "2">___2___</button>
      <button id= "3">___3___</button>
      <button id= "4">___4___</button>
          
     <h1>.</h1> 
      
      <h3>LIFO - hotest pancake served first </h3>
    
      <input placeholder="enter"></input>
      
      <button>make pancake</button>
      <button>insert</button>
      <button>delete</button>
      <button>serve pancake</button>
    
      <h1></h1>
    
      <button id= "1">___1___</button>
      <button id= "2">___2___</button>
      <button id= "3">___3___</button>
      <button id= "4">___4___</button>
           
    </div>
  );
}

// doubly linked list   standard methods
class dblLinkedList {
  constructor() {
    this.head = this.tail = null
  }

  //add to end of list(tail)
  append(value) {
    //case one:  if list is empty, case two: capture current tail
    if (!this.tail) { //if NOT this head is empty
      this.head = this.tail = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }

  // add to begining of list/head
  prepend(value) {
    //if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }

  deleteHead() {
    //if list is empty
    if (!this.head) { //if there is NO head
      return null
    } else {
      let removedHead = this.head
      // if 1 node left
      if (this.head === this.tail) { //last node on list
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null //remove any previous pointers
      }
      return removedHead.value
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null
    } else {
      let removedTail = this.tail //if 1 node
      return removedTail.value
    }
  }

  search(value) {
    let currentNode = this.head //track node

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  // class Node {
  // constructor(value, prev, next) {
  //   this.value = value
  //   this.prev = prev || null
  //   this.next = next || null
  // }
}

export default List;



//larrys pipe exersise for ref***********************


// import React from 'react';
// import './App.css';

// import NewPipeComp from './components/NewPipeComp.js';
// import CurrentPipeComp from './components/CurrentPipeComp.js';
// import ButtonsComp from './components/ButtonsComp.js';
// import ProjectComp from './components/ProjectComp';

// import funcs from './pipebusiness/pipelogic.js';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { todo: "" };
//     this.pipeLine = new funcs.PipeLine();
//   }

//   onSavePipe = (l, w, q) => {
//     // console.log(l, w, q);
//     this.pipeLine.insert(l, w, q);
//     this.setState({ todo: null });
//   }

//   onClick = (e) => {
//     const todo = e.target.getAttribute('todo');
//     // console.log('Should do a click thing', this.todo);
//     if (todo) {
//       // console.log(todo);
      
//       this.setState({ todo: todo });
//       if (todo === 'save') {
//         console.log("Do Save Stuff");
//       } else if (todo === 'cancel') {
//         console.log("Do Save Stuff");
//       } else if (todo === 'next') {
//         this.pipeLine.next();
//       } else if (todo === 'prev') {
//         this.pipeLine.prev();
//       }
//     }
//   }
  
//   getPipeLine = () => {
//     return this.pipeLine;
//   }

//   render() {
//     // console.log("!!! - in App.rendor", this.state.todo);

//     let output = [];

//     if (this.state.todo === "new") {
//       output.push(<NewPipeComp key="new" onSave={this.onSavePipe} />);
//     } else {
//       if (this.pipeLine.get()) {
//         output.push(<CurrentPipeComp key="current" pipe={this.pipeLine.get()} />);
//       } else {
//         output.push(<ButtonsComp key="buttons" />);
//       }
//     }


//     return (
//       <div onClick={this.onClick} className="App">
//         <h1>Pipe Linked List v.03</h1>
//         {output}
//         <ProjectComp/>
//       </div>
//     )
//   }
// }

// export default App;
