
import React, { useState } from 'react'
import Todoform from './components/todoform'
import Todo from './components/Todo'


import "./App.css"


const App = () => {
  let [todos,setTodos]=useState([]);
  const [todotoshow,setTodotoshow]=useState("all")
  const addTodo =(todo)=>{
    setTodos([todo,...todos])
  };
  const handleDelete =(id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id))
  };
  const updateTodoToShow =(s)=>{
    setTodotoshow(s);

  };
  if(todotoshow ==="active"){
    todos=todos.filter((todo)=> !todo.complete);

  }
  else if(todotoshow ==="complete"){
    todos=todos.filter((todo)=> todo.complete);

  };
  const toggleComplete =(id)=>{
    setTodos(todos.map((todo)=>{
      if(todo.id===id){
        return {
          ...todo ,
          complete: !todo.complete
        }
      }
      else{
        return todo
      }

    }
    ))

  };
  const removecomplete =() =>{
    setTodos(todos.filter((todo)=>!todo.complete))
  };
 
  return (
   <div className='container'>
      <Todoform onSubmit={addTodo} />
      {
        todos.map((todo)=>(

        <Todo key={todo.id} todo ={todo} onDelete= {() =>handleDelete(todo.id)}
        toggleComplete= {()=>toggleComplete(todo.id)}
        
        />
        ))
      }
      <div>
        <button className='update-btn btn' onClick={()=> updateTodoToShow("all")}>All</button>
        <button className='update-btn btn' onClick={()=> updateTodoToShow("active")}>Active</button>
        <button className='update-btn btn' onClick={()=> updateTodoToShow("complete")}>Complete</button>
      </div>
     {todos.some((todo)=> todo.complete)?( <button className='remove-btn btn'onClick={removecomplete}>Remove All Complete</button>)
     :null}
    
    </div>
  
);
};
export default App
