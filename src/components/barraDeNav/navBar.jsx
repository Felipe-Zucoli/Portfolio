import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div className="NavBar">
        <ul className="listaNav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="sobre">Sobre</Link></li>
            <li><Link to="projetos">Projetos</Link></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>
    )
}

export default NavBar;