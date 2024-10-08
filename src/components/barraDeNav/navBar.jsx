import "./NavBar.css";

const NavBar = () => {
    return (
    <div className="container">
        <ul className="listaNav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>
    )
}

export default NavBar;