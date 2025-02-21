import React, { useState } from 'react'
import './Todo.css'

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskText, setEditingTaskText] = useState("");
 
    const addTask = ()=>{
        if(newTask.trim()==="") return;
        const newTaskObject ={
            id: Date.now(),
            text:newTask,
            completed: false,
        };
        setTasks([...tasks,newTaskObject]);
        setNewTask("");
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };
   
      // Function to edit a task
      const startEditingTask = (id, text) => {
        setEditingTaskId(id);
        setEditingTaskText(text);
      };
      
      const saveTaskEdit = () => {
        setTasks(
          tasks.map((task) =>
            task.id === editingTaskId
              ? { ...task, text: editingTaskText }
              : task
          )
        );
        setEditingTaskId(null);
        setEditingTaskText('');
      };
   
      // Function to mark a task as completed
      const toggleCompletion = (id) => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };
  return (
    <div className='container'>
        <div className="content">
            <h2>Todo App</h2>
            <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='Add a new task' />
            <button onClick={addTask}>Add Task</button>
        </div>
 
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} style={{textDecoration:task.completed?"line-through":"none"}}>
                    {editingTaskId ===task.id?(
                        <div>
                            <input type="text" placeholder='Edit your task' value={editingTaskText} onChange={(e)=>setEditingTaskText(e.target.value)} />
                            <button onClick={saveTaskEdit}>Save</button>
                        </div>
                    ):(
                        <div>
                            <span onClick={()=>toggleCompletion(task.id)} className='span'>{task.text}</span>
                            <button onClick={()=>startEditingTask(task.id,task.text)}>Edit</button>
                            <button onClick={()=>deleteTask(task.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </div>
  )
}
 
export default TodoApp
 