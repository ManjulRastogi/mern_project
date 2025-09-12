import { useEffect, useState } from "react"
import '../style/List.css'

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



    return <div>
        <h1 className="head">TODO LIST</h1>



        <table className="table"  >
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>

            {taskData && taskData.map((item, index) => (
                <>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                    </tr>
                </>
            ))}
        </table>

    </div>

}