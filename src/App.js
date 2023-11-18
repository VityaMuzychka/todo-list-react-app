import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter(task => task !== taskName));
  }

  return (
    <div className="App">
     <div className='addTask'>
      <input onChange={(event) => setNewTask(event.target.value)}/>
      <button onClick={() => setTodoList([...todoList, newTask])}>Add Task</button>
     </div>
     <div className='list'>
      {todoList.map(task => {
        return (
           <div>
             <h1>{task}</h1>
             <button onClick={() => deleteTask(task)}> X </button>
           </div>)}
      )}
     </div>
    </div>
  );
}

export default App;
