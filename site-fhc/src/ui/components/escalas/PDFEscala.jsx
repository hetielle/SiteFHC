import React, { useEffect, useState } from "react";
import "../escalas/style/escala/Escala.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PDFEscala = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const nomeEspecialidade = searchParams.get("especialidade");

    const [titulo, setTitulo] = useState([]);
    const [anos, setAnos] = useState([]);
    const [meses, setMeses] = useState([]);
    const [pdfsLinks, setPdfsLinks] = useState([]);
    const [pageId, setPageId] = useState([]);
    
    

    useEffect(() => {
        async function fetchData() {
            try {

                const responsePages = await fetch(`https://iamind.com.br/wp/wp-json/wp/v2/pages?per_page=100`);

                if (!responsePages.ok) {
                    throw new Error('Resposta da rede não foi bem sucedida');
                }

                const dataPages = await responsePages.json();

                // Encontrar a página com o título correspondente à especialidade
                const page = dataPages.find(page => page.title.rendered === nomeEspecialidade);

                if (page) {
                    setPageId(page.id);
                } else {
                    throw new Error('Página não encontrada para a especialidade especificada');
                }
                    


                const response = await fetch(`https://iamind.com.br/wp/wp-json/wp/v2/pages/${pageId}`);

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
                
            } catch (error) {
                console.error('Erro ao puxar dados: ', error)
            }
        }
        fetchData();
    }, []);

    return (
        <article className="container-escala">
            <div className="container-titulo-escala">

                <h1>{titulo}</h1>
                <hr/>

            </div>

            {anos.map((ano, index) => {
                
                // Filtra os links de PDFs pelo ano atual
                const pdfsDoAno = pdfsLinks.filter(pdfLink => pdfLink.includes(ano));
                
                // Divide os links de PDFs do ano em grupos de seis
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
    );    
    
}

export default PDFEscala