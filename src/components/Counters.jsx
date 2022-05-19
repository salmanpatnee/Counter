import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {

    render() { 
        const {counters, onReset, onDelete, onIncrement, onDecrement} = this.props;

        return (<div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm mb-4">
                Reset
            </button>
            {counters.map(counter => <Counter 
            onDelete={onDelete} 
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={counter.id} 
            counter={counter}/>)}
            </div>);
    }
}
 
export default Counters;