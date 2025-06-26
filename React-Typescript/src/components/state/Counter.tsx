import { useReducer } from 'react'


type counterState={
   count: number
}
type payloadAction = {
    type: 'increment' | 'decrement'
    payload: number 
}
type resetAction = {
    type: 'reset'
}
type actionState = payloadAction | resetAction
const initialCount = {count: 0};
function reducer(state: counterState, action: actionState){
    switch (action.type){
        case'increment':
        return {count: state.count + action.payload}
        case'decrement':
        return {count: state.count - action.payload} 
        default:
        return state
    }
}
const Counter = () => {
 const [state,dispatch] = useReducer(reducer,initialCount);
    return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment', payload: 10})}>Incerement</button>
      <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Decrement</button>

    </>
  )
}

export default Counter