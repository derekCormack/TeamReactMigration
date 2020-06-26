import React, { Component} from 'react';

class Pancake extends Component {
    
    render() {
        const {type, diameter, heatLevel} = this.props;
        return (
                <div >
                    <p >  This {type} pancake is {diameter} inches and {heatLevel}</p>  
                     Hello
                </div>
        );
    }
};

  export default Pancake;

  
  
  