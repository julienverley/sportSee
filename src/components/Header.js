import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

/**
 * Display Header
 * @returns JSX
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="nav">Accueil</div>
      <div className="nav">Profil</div>
      <div className="nav">Réglage</div>
      <div className="nav">Communauté</div>
    </div>
  );
};

export default Header;
