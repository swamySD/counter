import { useDispatch,useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch=useDispatch()
  const value=useSelector((state)=>state.count)
  return (
    <div className="App">
      <div className='counter'>
        <p>{value}</p>
        <button onClick={dispatch({type:'INCREMENT'})}>increment</button>
        <button onClick={dispatch({type:'DECREMENT'})}>decrement</button>
        <button onClick={dispatch({type:'RESET'})}>reset</button>
      </div>
    </div>
  );
}

export default App;
