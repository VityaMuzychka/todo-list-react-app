import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const taskObj = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
    taskName: newTask
  }

  const deleteTask = (id) => {
   setTodoList(todoList.filter(task => task.id !== id));
  }

  return (
    <div className="App">
     <div className='addTask'>
      <input onChange={(event) => setNewTask(event.target.value)}/>
      <button onClick={() => setTodoList([...todoList, taskObj])}>Add Task</button>
     </div>
     <div className='list'>
      {todoList.map(task => {
       return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
      })}
     </div>
    </div>
  );
}

export default App;
