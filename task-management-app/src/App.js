import './App.css';
import { Task } from './Components/Task/Task';
import { useState } from 'react';

function App() {
  const [ title, setTitle ] = useState("");
  const [ desc, setDesc ] = useState("");
  const [ date, setDate ] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const CreateTask = (e) => {
    e.preventDefault();

    const newTask = { title, desc, date };
    setTasks([...tasks, newTask]);

    setTitle("");
    setDesc("");
    setDate("");
  }

  const HandleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks)
  }

  const HandleEdit = (index) => {
    
  }

  return (
    <div className="App">
      <form className='add-task' onSubmit={CreateTask}>
        <label>Title: </label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required></input>
        <label>Description: </label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
        <label>Due Date:</label>
        <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
        <button type='submit'>Add Task</button>
      </form>
      <h1>ALL TASKS</h1>
      {tasks.length > 0 ? (
        tasks.map((task, index) => {
          return <Task key={index}
                      title={task.title}
                      desc={task.desc}
                      date={task.date}
                      onDelete={() => {HandleDelete(index)}}
                  ></Task>
        })
      ) : (<p> No tasks yet</p>)}
    </div>
  );
}

export default App;
