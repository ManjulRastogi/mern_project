import '../style/AddTask.css'
import { Link } from 'react-router'
import { useState } from 'react'
function AddTask(){
    const [taskData,setTaskData]=useState()

    const handleAddTask= async(e)=>{
        e.preventDefault()
        console.log(taskData)
        let result= await fetch("http://localhost:3000/AddTask",{
            method:"POST",
            body:JSON.stringify(taskData),
            headers:{"Content-Type":"application/json"}
        })
        result=await result.json()
        console.log(result)
       

    }
    return(
        <>
        <div className="container">
            <h1 id="title">ADD NEW TASK</h1>
            <form  className="form">
                <label htmlFor="title">Title:</label>
                <input type="text" onChange={(event)=>setTaskData({...taskData,title:event.target.value})} placeholder="Task Title" id="title" name="title" required />
                <label htmlFor="desc">Task Description:</label>
                <textarea name="desc" onChange={(event)=>setTaskData({...taskData,desc:event.target.value})} id="desc" cols="30" rows="10" placeholder="Task Description"  required></textarea>
                <button onClick={handleAddTask} type="button" id="btn" ><Link to="/List">Submit button</Link></button>
            </form>
        </div>
        </>
    )
}
export default AddTask