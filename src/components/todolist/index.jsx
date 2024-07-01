import { useState } from 'react';

import TodoInput from './input';
import TodoTable from './table';

export default function Todolist() {

  const [tasks,setTasks] = useState([
    { id: 0, task: 't1', flag: false },
    { id: 1, task: 't2', flag: true },
    { id: 2, task: 't3', flag: false },
  ])

  const addTask = (newtask)=>{
    setTasks([...tasks.concat({
      id:tasks[tasks.length-1].id+1,
      task:newtask,
      flag:false
    })])
  }

  const toggleTaskStatus = (id) =>{
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, flag: !task.flag };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <TodoInput addTask={addTask}></TodoInput>
      <TodoTable task={tasks} toggleTaskStatus={toggleTaskStatus}></TodoTable>
    </div>
  );
}

