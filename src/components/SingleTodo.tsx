import React from 'react'
import Todo from '../model'

import './styles.css'

type props={
    todo:Todo,
    key:number,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({todo,key,todos,setTodos}:props) => {
  return (
    <form className='todo__single'>
        <span className="todos__single--text">{todo.todo}</span>
        <div>
            <span className='icon'>
            

            </span>
            <span className='icon'></span>
            <span className='icon'></span>
        </div>
    </form>
  )
}

export default SingleTodo