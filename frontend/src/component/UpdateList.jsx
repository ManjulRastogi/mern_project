
import { Link } from 'react-router'
import { useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'


function UpdateList() {
    // default blank object
    const [taskData, setTaskData] = useState({ title: "", desc: "" });
    const { id } = useParams();
    console.log(id);
    
useEffect(() => {
    if (!id) return; // id undefined ho to fetch mat karo
    const fetchTask = async () => {
        try {
            const res = await fetch(`http://localhost:3000/UpdateList/${id}`);
            if (!res.ok) throw new Error("Network response not OK");
            const data = await res.json();
            setTaskData({ title: data.title, desc: data.desc });
        } catch (err) {
            console.error("Fetch failed:", err);
        }
    };
    fetchTask();
}, [id]);


    const navigate=useNavigate();
    const handleUpdateTask = async (e) => {
        e.preventDefault();
        let result = await fetch(`http://localhost:3000/UpdateList/${id}`, {
            method: "PUT",
            body: JSON.stringify(taskData),
            headers: { "Content-Type": "application/json" },
        });
        await result.json();
        
        navigate("/list"); // update hone ke baad list pe wapas bhej do
       
    };
    return (
        <>
            <div className="container">
                <h1 id="title">Update Task</h1>
                <form className="form">
                    <label htmlFor="title">Title:</label>
                    <input type="text" value={taskData?.title} onChange={(event) => setTaskData({ ...taskData, title: event.target.value })} id="title" name="title" required />
                    <label htmlFor="desc">Task Description:</label>
                    <textarea name="desc" value={taskData?.desc} onChange={(event) => setTaskData({ ...taskData, desc: event.target.value })} id="desc" cols="30" rows="10" required></textarea>
                    <button onClick={handleUpdateTask} type="button" id="btn" >Update </button>
                </form>
            </div>
        </>
    )
}

export default UpdateList