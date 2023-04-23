import React from 'react'

const TodoItem = ({ todo,onDelete }) => {
    return (
        <div>
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-md-6 py-2">
                        <div className="card ">
                            <div className="card-body">
                                <p className='id'>{todo.id}</p>
                                <h4 className="card-title">{todo.task}</h4>
                                <p className="card-text">{todo.desc}</p>
                                <button type='button' className='btn bg-danger text-white' onClick={()=>onDelete(todo)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            {/* </div> */}
        </div>

    )
}

export default TodoItem
