import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ContactForm from "../../Forms/ContactForm/ContactForm";

import styles from "./ContactPage.module.css";

/**
 * ContactPage component.
 * Includes the {@link ContactForm} and a failure/success message.
 * @component
 * @exports
 */
const ContactPage = () => {
  const [t, i18n] = useTranslation("ContactPage");

  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayFailure, setDisplayFailure] = useState(false);

  return (
    <div className={styles.ContactPage}>
      <h1 className={styles.h1}>{t("contactUs")}</h1>
      {displayFailure ? (
        <h2 className={styles.failureMessage}>{t("failureMessage")}</h2>
      ) : null}
      {displaySuccess ? (
        <h2 className={styles.successMessage}>{t("successMessage")}</h2>
      ) : null}
      <ContactForm
        setDisplayFailure={() => setDisplayFailure(true)}
        setDisplaySuccess={() => setDisplaySuccess(true)}
      />
    </div>
  );
};

export default ContactPage;
