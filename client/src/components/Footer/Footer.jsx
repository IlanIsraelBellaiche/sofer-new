import React from 'react';
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

import { useTranslation } from 'react-i18next';

/**
 * Footer component.
 * Includes {@link AboutPage}, {@link ContactPage}, phone number and email.
 * @component
 * @exports
 */
const Footer = () => {
    const [t, i18n] = useTranslation('FooterTrad');
    
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.aPropos}>
                    <Link className={styles.link} to="about">
                        {t("A propos")}
                    </Link>
                </div>
                <div className={styles.contact}>
                    <Link className={styles.link} to="contact">
                        {t("Contact")}
                    </Link>
                </div>
            </div>
            
            <div className={styles.infos}>
                <div>
                    <span>
                        {t("numero")}: 053-823-7036
                    </span>
                </div>
                <div className={styles.email}>
                    <span>
                        {t("email")}: sofer.stam.site@gmail.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;