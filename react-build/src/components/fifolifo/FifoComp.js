import React, { Component} from 'react';

class FifoLifo extends Component {
    
    render() {
        const {pancake} = this.props;
        return (
                <div className="pancake"> 
                        Pancake: {pancake}
                </div>
        );
    }
};


export default FifoLifo;