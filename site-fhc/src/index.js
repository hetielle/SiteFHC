import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CookieConsent from 'react-cookie-consent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookieConsent 
      enableDeclineButton
      buttonText="Aceitar"
      declineButtonText= "Rejeitar"
      cookieName="cookies-fhcsl"
      buttonStyle={{ background: "#C00606", fontSize: "15px", color: "#F6F6F6", borderRadius: "20px", padding: "8px 17px 9px 17px"}}
      expires={150}
      declineButtonStyle={{ background: "#C00606", fontSize: "15px", color: "#F6F6F6", borderRadius: "20px", padding: "8px 17px 9px 17px"}}>
      Ao utilizar nosso site você concorda com nosso uso de cookies e com nossa política de LGPD.
      Descubra mais lendo sobre{" "}
      <a href="/politica-privacidade" style={{color: "#C00606"}}>aqui!</a>
    </CookieConsent>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
