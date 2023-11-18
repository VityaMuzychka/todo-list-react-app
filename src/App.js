import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  return (
    <div className="App">
     <div className='addTask'>
      <input onChange={(event) => setNewTask(event.target.value)}/>
      <button onClick={() => setTodoList([...todoList, newTask])}>Add Task</button>
     </div>
     <div className='list'>
      {todoList.map(task => <h1>{task}</h1>)}
     </div>
    </div>
  );
}

export default App;
