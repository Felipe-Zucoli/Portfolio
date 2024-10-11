import React, {useEffect, useState} from "react";
import "./BotaoRetTopo.css";

const BotaoRetTopo = () => {
    const [isVisible, setIsVisible] = useState(false);

    const visibilidadeButn = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const voltarTopo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", visibilidadeButn);
        return () => {
            window.removeEventListener("scroll", visibilidadeButn);
        };
    }, []);

    return (
        <div className="voltarTopo" style={{ display: isVisible ? "block" : "none" }}>
            <button onClick={voltarTopo} className="bttnVoltarTopo">↑ Voltar ao topo</button>
        </div>
    );
};

export default BotaoRetTopo;
