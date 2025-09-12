import { Link } from 'react-router-dom'
import '../style/NavBar.css'

function Navbar(){
    return(
        <>
        <div className="navbar">
        <div className="logo">To Do App</div>
        <ul className="nav-menu">
            <li><Link to="/AddTask">Add Task</Link></li>
            <li><Link to="/List">List</Link></li>
        </ul>
        </div>
        </>
    )
}
export default Navbar