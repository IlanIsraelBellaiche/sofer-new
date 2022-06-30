import React from "react";

import styles from "./AddItemForm.module.css";

const AddItemForm = () => {
  return (
    <form className={styles.AddItemForm}>
      {/* Reference */}
      <label>
        Reference
        <input type="text" className={styles.input} required />
      </label>
      {/* French Name */}
      <label>
        Nom Francais
        <input type="text" className={styles.input} required />
      </label>
      {/* English Name */}
      <label>
        Nom Anglais
        <input type="text" className={styles.input} required />
      </label>
      {/* Hebrew Name */}
      <label>
        Nom Hebreu
        <input type="text" className={styles.input} required />
      </label>
      {/* French Description */}
      <label>
        Description Francais
        <input type="text" className={styles.input} required />
      </label>
      {/* English Description */}
      <label>
        Description Anglais
        <input type="text" className={styles.input} required />
      </label>
      {/* Hebrew Description */}
      <label>
        Description Hebreu
        <input type="text" className={styles.input} required />
      </label>
      {/* Price */}
      <label>
        Prix
        <input type="text" className={styles.input} required />
      </label>
    </form>
  );
};

export default AddItemForm;
