import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';

function App() {
  // const [number,setNumber]=useState('')
  const dispatch=useDispatch()
  const value=useSelector((state)=>state.count)

  const inputHandler=(e)=>{
  dispatch({type:'INPUT_NUMBER',payload:Number(e.target.value)});
  }
  

  return (
    <div className="App">
      <div className='counter'>
        <input type="number" value={value} onChange={inputHandler} />
        <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
        <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
      </div>
    </div>
  );
}

export default App;
