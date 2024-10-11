import "./sobre.css";
import foto from "../img/Felipe.jpg"

const Sobre = () => {
    return(
    <div className="containerSobre">
        <div className="foto">
            <img src={foto} alt="minha foto"/>
        </div>
        <div className="textSobreMim">
            <h1>Sobre mim</h1>
            <p> 
            Atualmente, sou um estudante do 7º semestre de Engenharia de Software pela UniCesumar, apaixonado por tecnologia e desenvolvimento de software. 
            Possuo um certo conhecimento técnico nas linguagens e ferramentas JavaScript, HTML, CSS, C#, MySQL e na biblioteca React, que utilizo tanto em projetos acadêmicos quanto pessoais.
            Sempre busco aprender coisas novas e me mantenho atualizado sobre as tendências da área de desenvolvimento, especialmente no campo da programação de jogos, que é uma das minhas maiores paixões.
            Desde que comecei a estudar programação, me encantei com a capacidade de transformar ideias em realidade por meio do código. Tenho interesse em trabalhar em projetos desafiadores, 
            que me permitam crescer e expandir minhas habilidades.<br/> Acredito na importância de um ambiente de trabalho colaborativo e produtivo, onde o aprendizado contínuo e a troca de experiências são essenciais para o sucesso.
            Durante meu tempo livre, gosto de explorar novos conceitos, ler sobre tecnologias emergentes e criar pequenos projetos para praticar minhas habilidades. <br/><br/>
            Além disso, sou apaixonado por jogos, o que alimenta ainda mais meu desejo de trabalhar com desenvolvimento de software e, quem sabe, futuramente focar na programação de jogos.
            Estou em busca de uma oportunidade para ingressar no mercado de trabalho, onde posso aplicar o que aprendi e desenvolver meu potencial como profissional. 
            Meu objetivo é crescer na área de desenvolvimento e me tornar um programador de excelência, sempre com foco em melhorar minhas habilidades e contribuir positivamente para os projetos e equipes com os quais trabalho.
            </p>
        </div>
    </div>
    )
}

export default Sobre;