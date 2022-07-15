import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error404">404</div>
      <h2 className="error-message">
        Oups ! La page que vous demandez n'existe pas.
      </h2>
      <NavLink to="/">
        <h4 className="error-link">Retourner sur la page d'accueil</h4>
      </NavLink>
    </div>
  );
};

export default Error;