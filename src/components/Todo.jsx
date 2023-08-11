import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.catergory})</p>
    </div>
   <div> <input type='checkbox'className='complete'onClick={() => completeTodo(todo.id)}></input></div>
    <div>
     
      <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
    </div>
  </div>
  )
}

export default Todo