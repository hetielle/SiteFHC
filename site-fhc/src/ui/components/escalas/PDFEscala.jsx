import React, { useEffect, useState } from "react";
import "../escalas/style/escala/Escala.css";
import { Link } from "react-router-dom";

const PDFEscala = () => {

    const [anos, setAnos] = useState([]);
    const [meses, setMeses] = useState([]);
    const [pdfsLinks, setPdfsLinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://iamind.com.br/wp/wp-json/wp/v2/pages/80');

                if(!response.ok){
                    throw new Error('Resposta da rede não foi bem sucedida');
                }

                const data = await response.json();
                const content = data.content.rendered;
                const parser = new DOMParser();

                const htmlDoc = parser.parseFromString(content, 'text/html');

                    const paragraphs = htmlDoc.getElementsByTagName('p');
                    const links = htmlDoc.getElementsByTagName('a');

                    const anos = [];
                    const meses = [];
                    const pdfsLinks = [];

                    for(let p of paragraphs){
                        if (/^\d+$/.test(p.innerText) && p.innerText.includes(nomeEspecialidade)) {
                            anos.push(p.innerText.trim());
                        }
                    }

                    setAnos(anos);

                    for (let a of links) {
                        if(a.href.includes(nomeEspecialidade)){
                            pdfsLinks.push(a.href);
                            meses.push(a.innerText.trim());
                        }
                    }

                    setPdfsLinks(pdfsLinks);
                    setMeses(meses);
                
            } catch (error) {
                console.error('Erro ao puxar dados: ', error)
            }
        }
        fetchData();
    }, []);

    return(
        <article className="">
            {anos.map((ano, index) => (
                <section className="container-ano-pdfs" key={index}>
                    <h2>{ano}</h2>
                    <div className="container-pdfs">
                        {pdfsLinks.slice(0, 6).map((pdfLink, index) => (
                            <div className="container-pdfs-left" key={index}>
                                {meses.slice(0, 6).map((mes, index) => (
                                <Link to={pdfLink} className="btn" key={index}>{mes}</Link>

                                ))}
                            </div>
                        ))}
                        {pdfsLinks.slice(6, 12).map((pdfLink, index) => (
                            <div className="container-pdfs-right" key={index}>
                                {meses.slice(0, 6).map((mes, index) => (
                                <Link to={pdfLink} className="btn" key={index}>{mes}</Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </article>

    )
}

export default PDFEscala