import image from "../img/Img-ref.png";
import "./card.css";
import { TbBrandVite } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const Card = () => {
    return (
        <div className="card">
            <h2>Calculadora de assinaturas mensais</h2>
            <img src={image} alt="Imagem de referencia projeto"/>
            <p>Um projeto simples para gerenciar gastos mensais com assinaturas.</p>
            <div className="cardFooter">
                <a href="https://felipe-zucoli.github.io/Calculadora_Assinaturas_Mensais/" target="blank">
                    Acesse Projeto
                </a>
                <a href="https://github.com/Felipe-Zucoli/Calculadora_Assinaturas_Mensais" target="blank">
                    Acesse Codigo Fonte
                </a>
                <div className="cardIcons">
                    <TbBrandVite/>
                    <FaReact />
                </div>
            </div>
        </div>
    );
}


export default Card;
