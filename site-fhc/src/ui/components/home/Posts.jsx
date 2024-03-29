import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function getImageUrl(content) {
    const regex = /<img.*?src="(.*?)"/;
    const match = regex.exec(content);

    let imageUrl = null;
    if (match && match.length > 1) {
      imageUrl = match[1];
    }

    return imageUrl;
  }

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch('https://iamind.com.br/wp/wp-json/wp/v2/posts');

        if (!response.ok) {
          throw new Error('Resposta da rede não foi bem sucedida');
        }

        const posts = await response.json();

        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao puxar dados: ', error);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className='container-noticias'>
      {loading ? (
        <SyncLoader color={"#C00606"} loading={loading} size={20}/>
      ) : (
        <>
          {posts.slice(0,3).map((post, index) => (
            <article className='container-noticia-home' key={index}>
              <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h3>
              {getImageUrl(post.content.rendered) && <img src={getImageUrl(post.content.rendered)} className='img-noticia'/>}
              <p dangerouslySetInnerHTML={{__html: post.content.rendered.replace(/<img.*?>/g, '')}}></p>
              <Link to={post.guid.rendered} target="_blank" className="btn btn-black btn-noticia">Ler mais</Link>
            </article>
          ))}
        </>
      )}
    </div>
  );
}
