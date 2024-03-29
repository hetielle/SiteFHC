import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../escalas/style/escalas/Escalas.css";
import SyncLoader from "react-spinners/SyncLoader";

const Especialidades = () => {
    const [especialidades, setEspecialidades] = useState([]);
    const [loading, setLoading] = useState(true);

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
                const links = htmlDoc.getElementsByTagName('a');

                const especialidades = [];

                for (let a of links) {
                    especialidades.push(a.textContent.trim());
                }
                setEspecialidades(especialidades);
                setLoading(false); // Indica que os dados foram carregados com sucesso
            } catch (error) {
                console.error('Erro ao puxar dados: ', error);
                setLoading(false); // Indica que ocorreu um erro ao carregar os dados
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container-especialidades">
            {loading ? (
                <SyncLoader color={"#C00606"} loading={loading} size={20}/>
            ) : (
                <>
                    {especialidades.slice(0,12).map((especialidade, index) => (
                        <div className="container-especialidades-left" key={index}>
                            <Link to={`/escala?especialidade=${encodeURIComponent(especialidade)}`} className="btn">{especialidade}</Link>
                        </div>
                    ))}

                    {especialidades.slice(12,24).map((especialidade, index) => (
                        <div className="container-especialidades-right" key={index}>
                            <Link to={`/escala?especialidade=${encodeURIComponent(especialidade)}`} className="btn">{especialidade}</Link>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default Especialidades;
