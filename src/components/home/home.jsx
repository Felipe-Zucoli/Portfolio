import "./home.css";
import React, {useState, useEffect} from "react";
import { FaGitAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import imagem from "../img/imagem.gif"
import { Link } from "react-router-dom";

const Home = () => {
    const [text, setText] = useState("Olá, mundo!");
    const [fadeClass, setFadeClass] = useState("");

    useEffect(() =>{
        const intervalId = setInterval(()=>{
            setFadeClass("fade-out");
            setTimeout(()=> {
            setText((prevText)=>
                prevText === "Olá, mundo!" ? "Hello, world!" : "Olá, mundo!"
            );
            setTimeout(() =>{
            setFadeClass("");
        }, 800);
        }, 2000);
        }, 7000);
        return() => clearInterval(intervalId);
    }, [])

    

    return (
        <div className="container">
            <div className="textHome">
                <h3 className={fadeClass}>{text}</h3>
                <p>Bem vindo<br></br> ao meu portfolio.</p>
                <Link to= "sobre" className="bttnSobre">Mais sobre mim</Link>
                <ul>
                    <li><a href="https://github.com/Felipe-Zucoli" target="_blank" className="gitIcon"><FaGitAlt></FaGitAlt></a></li>
                    <li><a href="https://www.linkedin.com/in/felipe-zucoli-51b571202/" target="_blank" className="linkeIcon"><FaLinkedin></FaLinkedin></a></li>
                </ul>
            </div>
            <img src={imagem} alt="gif criado no canvas"/>
        </div>
    )
}


export default Home;