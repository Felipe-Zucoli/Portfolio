import "./contato.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Contato = () => {
    return (
        <div className="containerContato">
        <p>Obrigado por ver meu portfolio!<br></br><br></br>
        Caso queira entrar em contato, segue meus links.</p>
        <ul className="linkContato">
            <li><a href="https://www.linkedin.com/in/felipe-zucoli-51b571202/" target="_blank" className="linkeIconContato"><FaLinkedin></FaLinkedin></a></li>
            <li><a href="https://wa.me/5544991536070" target="_blank" className="whatsIconContato"><FaWhatsapp></FaWhatsapp></a></li>
        </ul>
        </div>
    )
}

export default Contato;