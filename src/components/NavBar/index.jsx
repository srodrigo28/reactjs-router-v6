import "./NavBar.css"
import { Link } from "react-router-dom"

export function NavBar() {
    return(
        <nav>
            <Link to="/" > Home </Link>
            <Link to="/products"> Produtos </Link>
            <Link to="/tasks">    Tarefas </Link>
        </nav>
    )
}