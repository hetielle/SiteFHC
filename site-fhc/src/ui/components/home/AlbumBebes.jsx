import React, { useEffect } from 'react';
import './style/albumBebes/AlbumBebes.css';

const AlbumBebes = () => {

  useEffect(() => {

    const loadEmbedSocialScript = () => {
      const existingScript = document.getElementById('EmbedSocialHashtagScript');
      
      if (existingScript) {
        return;
      }

      const script = document.createElement('script');
      script.id = 'EmbedSocialHashtagScript';
      script.src = 'https://embedsocial.com/cdn/ht.js';
      
      document.head.appendChild(script);
    };

    const embedSocialElement = document.querySelector('.embedsocial-hashtag');
    if (embedSocialElement) {
      embedSocialElement.classList.add('disable-sticky');
    }

    loadEmbedSocialScript();

    return () => {
      const script = document.getElementById('EmbedSocialHashtagScript');
      if (script) {
        script.remove();
      }
    };
  }, []); 

    return (
      <section className="container-album-home">

        <h2>Álbum dos bebês</h2>

        <div className="embedsocial-hashtag disable-sticky" data-ref="1f233c45c596f4ced0ebe795b094df80a83bcaca">
          <a
            className="feed-powered-by-es feed-powered-by-es-slider-img"
            href="https://embedsocial.com/social-media-aggregator/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram widget">

            <img src="https://embedsocial.com/cdn/images/embedsocial-icon.png" alt="EmbedSocial" />
            Instagram widget
          </a>
        </div>   

      </section>
    )
  }
   
  export default AlbumBebes  