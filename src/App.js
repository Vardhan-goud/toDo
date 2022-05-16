import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import ToDoCount from './components/ToDoCount';

function App() {
  let [tasks,setTasks]=useState([]);
  return (
    <div className="row">
      <div className="col-sm-4">
        <AddToDo tasks={tasks} setTasks={setTasks}></AddToDo>
      </div>
      <div className="col-sm-4">
        <ToDoList tasks={tasks}></ToDoList>
      </div>
      <div className="col-sm-4">
        <ToDoCount tasks={tasks}></ToDoCount>
      </div>
    </div>
  );
}

export default App;
