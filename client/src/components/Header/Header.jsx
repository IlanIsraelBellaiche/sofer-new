import React from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

import styles from "./Header.module.css";

import hamburgerMenuIcon from "../../icons/hamburgerMenu.png";

import Languages from "../Languages/Languages";

/**
 * Header component.
 * Includes Hamburger Menu Icon to open SideBar, Menu (HomePage, Catalog, About us and Contact us)
 * and buttons (Connexion + Languagues).
 * @component
 * @exports
 * @param {function} openSideBar Set the openSideBar to true
 */
const Header = ({ openSideBar }) => {
  const [t, i18n] = useTranslation("HeaderTrad");

  return (
    <div className={styles.Header}>
      {/* Header Right (Hamburger Menu) */}
      <div className={styles.hamburgerMenuDiv} onClick={openSideBar}>
        <img
          className={styles.hamburgerMenu}
          src={hamburgerMenuIcon}
          alt="menu"
        />
      </div>
      {/* Header Middle (Menu) */}
      <div className={styles.navbar}>
        <NavLink
          className={styles.link}
          to="/"
        >
          {t("Page d'accueil")}
        </NavLink>
        <NavLink
          className={styles.link}
          to="/catalog"
        >
          {t("Catalogue")}
        </NavLink>
        <NavLink
          className={styles.link}
          to="/about"
        >
          {t("A propos")}
        </NavLink>
        <NavLink
          className={styles.link}
          to="/contact"
        >
          {t("Contact")}
        </NavLink>
      </div>
      {/* Header Left (Buttons: Sign In + Languagues) */}
      <div className={styles.leftHeader}>
        {/* <Button
          variant="contained"
          size="small"
          className={styles.connexionButton}
        >
          Sign In
        </Button> */}
        <Languages />
      </div>
    </div>
  );
};

export default Header;
