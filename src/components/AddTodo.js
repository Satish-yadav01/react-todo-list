import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [task,setTask] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!task || !desc){
            alert("please insert task")
        }else{
            console.log(`task:${task} and desc : ${desc}`);
            addTodo(task,desc);
            setTask("");
            setDesc("");
        }
    }

    return (
        <div className='container py-4'>
            <h1 className='text-center'>Add Task</h1>
            <hr />
            <form onSubmit={submit}>
                <div className="form-group py-2">
                    <label htmlFor="exampleInputEmail1">Task</label>
                    <input type="text" value={task} className="form-control" id="exampleInputTask" placeholder="Enter task" onChange={(e)=>setTask(e.target.value)}/>

                </div>
                <div className="form-group py-2">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" value={desc} className="form-control" id="exampleInputDescription" placeholder="Enter descrption.." 
                    onChange={(e)=>setDesc(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-dark">Add Task</button>
            </form>
        </div>
    )
}

export default AddTodo