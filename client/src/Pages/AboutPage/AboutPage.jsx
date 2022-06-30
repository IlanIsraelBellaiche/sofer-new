import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./AboutPage.module.css";

/**
 * AboutPage component.
 * Includes the about us text.
 * @component
 * @exports
 * @returns 
 */
const AboutPage = () => {
    const [t, i18n] = useTranslation('AboutTrad');

    return (
        <div className={styles.AboutPage}>
            <div className={styles.aPropos}>
                {t("phrase1")}
                <br /><br />
                {t("phrase2")}
            </div>
        </div>
    )
}

export default AboutPage;