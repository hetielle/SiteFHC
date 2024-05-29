import React, { useEffect, useState } from "react";
import "../style/escala/Escala.css";
import "../style/escala/EscalaSmartphone.css";
import { Link } from "react-router-dom";
import Header from "../../geral/Header";
import Footer from "../../geral/Footer";
import SyncLoader from "react-spinners/SyncLoader";

const CentroObstetrico = () => {
    const [loading, setLoading] = useState(true);
    const [titulo, setTitulo] = useState([]);
    const [anos, setAnos] = useState([]);
    const [meses, setMeses] = useState([]);
    const [pdfsLinks, setPdfsLinks] = useState([]); 

    useEffect(() => {
        async function fetchData() {
            try {               
                const response = await fetch("https://iamind.com.br/wp/wp-json/wp/v2/pages/90");

                if(!response.ok){
                    throw new Error('Resposta da rede não foi bem sucedida');
                }

                const data = await response.json();
                const content = data.content.rendered;
                const parser = new DOMParser();

                setTitulo(data.title.rendered);

                const htmlDoc = parser.parseFromString(content, 'text/html');

                const paragraphs = htmlDoc.getElementsByTagName('p');
                const links = htmlDoc.getElementsByTagName('a');

                const anos = [];
                const meses = [];
                const pdfsLinks = [];

                for(let p of paragraphs){
                    if (/^\d+$/.test(p.innerText)) {
                        anos.push(p.innerText.trim());
                    }
                }

                setAnos(anos);

                for (let a of links) {
                    pdfsLinks.push(a.href);
                    meses.push(a.innerText.trim());
                }

                setPdfsLinks(pdfsLinks);
                setMeses(meses);
                setLoading(false); 
            } catch (error) {
                console.error('Erro ao puxar dados: ', error)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header/>
            {loading ? (
                <div className="loading-overlay">
                    <SyncLoader color={"#020381 "} loading={loading} size={20}/>
                </div>
            ) : (
                <article className="container-escala">
                    <div className="container-titulo-escala">
                        <h1>{titulo}</h1>
                        <hr/>
                    </div>

                    {anos.map((ano, index) => {
                        const pdfsDoAno = pdfsLinks.filter(pdfLink => pdfLink.includes(ano));
                        const gruposDePdfs = [];
                        for (let i = 0; i < pdfsDoAno.length; i += 6) {
                            gruposDePdfs.push(pdfsDoAno.slice(i, i + 6));
                        }

                        return (
                            <section className="container-ano-pdfs" key={index}>
                                <h2>{ano}</h2>
                                {gruposDePdfs.map((grupo, index) => (
                                    <div className="container-grupo-pdfs" key={index}>
                                        <div className="container-pdfs-left">
                                            {grupo.slice(0, 6).map((pdfLink, idx) => (
                                                <Link to={pdfLink} className="btn" key={idx}>
                                                    {meses[idx]}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="container-pdfs-right">
                                            {grupo.slice(6, 12).map((pdfLink, idx) => (
                                                <Link to={pdfLink} className="btn" key={idx + 6}>
                                                    {meses[idx + 6]}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </section>
                        );
                    })}
                </article>
            )}
            <Footer/>
        </div>
    );    
}

export default CentroObstetrico;
