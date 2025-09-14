import { useEffect, useState } from "react"
import { Link } from "react-router"
import '../style/List.css'
import UpdateList from "./UpdateList"


export default function List() {

    const [taskData, setTaskData] = useState()

    useEffect(() => {
        getListData();
    }, [])

    const getListData = async () => {
        let list = await fetch("http://localhost:3000/list")
        list = await list.json()
        console.log(list);

        setTaskData(list)
    }


    const DeleteTask = async (id) => {
        let result = await fetch(`http://localhost:3000/delete/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        console.log(result);
        getListData();
    }
   
    return <div>
        <h1 className="head">TODO LIST</h1>



        <table className="table"  >
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {taskData && taskData.map((item, index) => (


                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td><button onClick={() => DeleteTask(item._id)}>Delete</button>
                            <Link to={`/UpdateList/${item._id}`}><button>
                                Update </button></Link>
                        </td>
                    </tr>


                ))}
            </tbody>
        </table>

    </div>

}