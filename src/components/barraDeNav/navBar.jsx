import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div className="NavBar">
        <ul className="listaNav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="sobre">Sobre</Link></li>
            <li><Link to="projetos">Projetos</Link></li>
            <li><Link to="contato">Contato</Link></li>
        </ul>
    </div>
    )
}

export default NavBar;