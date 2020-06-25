import React, { Component} from 'react';

class Pancake extends Component {
    
    render() {
        const {type, diameter, heatLevel} = this.props;
        return (
                <div  >
                    <p >  This {type} pancake is  {diameter} and {heatLevel}</p>  
       
                </div>
        );
    }
};

  export default Pancake;