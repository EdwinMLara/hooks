import { count } from "console";
import React, { useReducer } from "react";

type CounterAction = {type:'increment',payload:number} | {type:'decrement', payload:number} | {type:'reset'}
interface CounterState {
    count: number
}

const counterReducer = (state: CounterState,action: CounterAction) : CounterState => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return {count:0}
        default:
            throw new Error('unhandle action type')
    }
}

const CounterActionUseReducer: React.FC = () => {

    const [state, dispatch] = useReducer(counterReducer,{count:0});

  return (
    <div>
        <h2>Probando useReducer hook</h2>
        <h3>Count: {state.count}</h3>
        <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default CounterActionUseReducer;
