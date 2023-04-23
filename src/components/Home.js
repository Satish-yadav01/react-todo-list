import React from 'react'
import TodoItem from './TodoItem'

const Home = ({ todos, onDelete }) => {
  let style = {
    minHeight: "70vh",
    margin: "40px auto",
    border: "1px solid black",
    borderRadius: "10px"
  }
  return (
    <>

      <div className="container p-3" style={style}>
        <h3 className='my-3'>Todo List</h3>
        {todos.length === 0 ? "No task available" :
          todos.map((todo) => {
            return (<TodoItem todo={todo} key={todo.id} onDelete={onDelete} />)
          })
        }

      </div>
    </>
  )
}

export default Home
