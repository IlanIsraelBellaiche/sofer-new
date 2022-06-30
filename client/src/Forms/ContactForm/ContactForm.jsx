import { React, useReducer } from "react";
import { useTranslation } from "react-i18next";

import styles from "./ContactForm.module.css";

import { requestPostMessage } from "../../Request/RequestPostMessage";

// Initial values of the form
const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

/**
 * Reducer.
 * Update the form values.
 * Reset the form values.
 * @param {object} action Includes all the data needed.
 * @param {string} action.type The action to do (update or reset).
 * @param {object} action.item The field to update.
 * @returns {object} The initial state or the state updated.
 */
function formReducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.item };
    case "reset":
      return initialState;
  }
}

/**
 * ContactForm component.
 * Form to contact the administrators.
 * Includes name, email and message fields (required) and phone number (optional).
 * If the user send a message, display failure or success message.
 * @component
 * @exports
 * @param {function} setDisplayFailure Display the failure messsage.
 * @param {function} setDisplaySuccess Display the success message.
 */
const ContactForm = ({ setDisplayFailure, setDisplaySuccess }) => {
  const [t, i18n] = useTranslation("ContactForm");

  const [formValues, formValuesDispatch] = useReducer(
    formReducer,
    initialState
  );

  /**
   * When submit the form, send the message to the DB.
   * If success, reset the form and display a success message.
   * If failure, display failure message without reset the form.
   * @param {object} e Includes a lot of data.
   * @param {function} e.preventDefault Block the natural comportment of the button.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await requestPostMessage.postMessage(formValues);

    if (response.data) {
      formValuesDispatch({ type: "reset" });
      setDisplaySuccess(true);
    } else {
      setDisplayFailure(true);
    }
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      {/* Name */}
      <label>
        {t("name")}:
        <input
          type="text"
          className={styles.input}
          required
          value={formValues.name || ""}
          onChange={(e) =>
            formValuesDispatch({
              type: "update",
              item: { name: e.target.value },
            })
          }
        />
      </label>
      {/* Email */}
      <label>
        {t("email")}:
        <input
          type="email"
          className={styles.input}
          required
          value={formValues.email || ""}
          onChange={(e) =>
            formValuesDispatch({
              type: "update",
              item: { email: e.target.value },
            })
          }
        />
      </label>
      {/* Phone Number */}
      <label>
        {t("phone")}:
        <input
          type="tel"
          className={styles.input}
          pattern="[0-9]{10}|[+]{1}[0-9]{12}"
          value={formValues.phoneNumber || ""}
          onChange={(e) =>
            formValuesDispatch({
              type: "update",
              item: { phoneNumber: e.target.value },
            })
          }
        />
      </label>
      {/* Message */}
      <label>
        {t("message")}:
        <textarea
          placeholder={t("placeholderMessage")}
          rows="5"
          className={styles.input}
          required
          value={formValues.message || ""}
          onChange={(e) =>
            formValuesDispatch({
              type: "update",
              item: { message: e.target.value },
            })
          }
        />
      </label>
      <button type="submit" className={styles.submit}>
        {t("send")}
      </button>
    </form>
  );
};

export default ContactForm;
