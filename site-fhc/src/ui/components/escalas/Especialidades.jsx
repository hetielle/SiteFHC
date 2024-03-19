import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../escalas/style/escalas/Escalas.css";

const Especialidades = ({nomeEspecialidade}) => {
    const [especialidades, setEspecialidades] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://iamind.com.br/wp/wp-json/wp/v2/pages/80');
                if (!response.ok) {
                    throw new Error('Resposta da rede não foi bem sucedida');
                }
                const data = await response.json();
                const content = data.content.rendered;
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(content, 'text/html');
                const paragraphs = htmlDoc.getElementsByTagName('p');
                const especialidades = [];
                for (let p of paragraphs) {
                    if (!p.querySelector('a') && p.textContent.trim().length > 0 && !(/^\d+$/.test(p.innerText))) {
                        especialidades.push(p.textContent.trim());
                    }
                }
                setEspecialidades(especialidades);
            } catch (error) {
                console.error('Erro ao puxar dados: ', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container-especialidades">
            {especialidades.slice(0,12).map((especialidade, index) => (
                <div className="container-especialidades-left" key={index}>
                    <Link to={`/escala/${nomeEspecialidade}`} onClick={ nomeEspecialidade = especialidade} className="btn">{especialidade}</Link>
                </div>
            ))}

            {especialidades.slice(12,24).map((especialidade, index) => (
                <div className="container-especialidades-right" key={index}>
                    <Link to={`/escala/${nomeEspecialidade}`} onClick={nomeEspecialidade = especialidade} className="btn">{especialidade}</Link>
                </div>
            ))}
        </div>
    );
}

export default Especialidades;
