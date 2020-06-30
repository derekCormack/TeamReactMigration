import React, { Component} from 'react';

class Pancake extends Component {
    
    render() {
        const {id, type, diameter, heatLevel} = this.props;
        return (
                <div >
                    <p >  Pancake {id} is a {type} pancake with {diameter} inches diameter and it's {heatLevel}</p>  
                    
                </div>
        );//
    }
};

  export default Pancake;

  
  
  