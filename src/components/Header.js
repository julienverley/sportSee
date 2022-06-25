import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav">Accueil</div>
      <div className="nav">Profil</div>
      <div className="nav">Réglage</div>
      <div className="nav">Communauté</div>
    </div>
  );
};

export default Header;
