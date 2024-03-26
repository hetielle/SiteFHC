import React from "react";
import { Link } from "react-router-dom";
import "./style/error-404/Error404.css";

const Error404 = () => {

  return (
    <div className="container-error-404">
        <h1>Ops!</h1>
        <h2>Essa página não foi encontrada :(</h2>
        <Link to={"/"}>Voltar para a página incial</Link>
    </div>
  )
}
 
export default Error404
