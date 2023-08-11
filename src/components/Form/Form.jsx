import React from "react";
import styles from "./Form.module.css";

const Form = ({
  category,
  inputHandler,
  categoryChipHandler,
  prompt,
  createTravelPlan,
}) => {
  return (
    <div className={styles["form_wrapper"]}>
      <div className={styles["form_container"]}>
        <input
          onChange={(e) => inputHandler(e)}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required={true}
        />
        <input
          onChange={(e) => inputHandler(e)}
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          required={true}
        />
        <input
          onChange={(e) => inputHandler(e)}
          type="text"
          id="destination"
          name="destination"
          placeholder="Destination"
          required={true}
        />
      </div>

      <div className={styles["category_container"]}>
        <button
          onClick={() => categoryChipHandler("hills")}
          className={`${styles["category_chip"]} ${
            category.includes("hills") && styles["active_category_chip"]
          } `}
        >
          <i className="fas fa-mountain"></i>
          <p>Hill Stations</p>
        </button>

        <button
          onClick={() => categoryChipHandler("forts")}
          className={`${styles["category_chip"]} ${
            category.includes("forts") && styles["active_category_chip"]
          } `}
        >
          <i className="fab fa-fort-awesome"></i>
          <p>Forts</p>
        </button>
        <button
          onClick={() => categoryChipHandler("lake")}
          className={`${styles["category_chip"]} ${
            category.includes("lake") && styles["active_category_chip"]
          } `}
        >
          <i className="fas fa-water"></i>
          <p>Lake</p>
        </button>

        <button
          onClick={() => categoryChipHandler("beach")}
          className={`${styles["category_chip"]} ${
            category.includes("beach") && styles["active_category_chip"]
          } `}
        >
          <i className="fas fa-umbrella-beach"></i>
          <p>Beach</p>
        </button>

        <button
          onClick={() => categoryChipHandler("cafe")}
          className={`${styles["category_chip"]} ${
            category.includes("cafe") && styles["active_category_chip"]
          } `}
        >
          <i className="fas fa-coffee"></i>
          <p>Cafe</p>
        </button>

        <button
          onClick={() => categoryChipHandler("club")}
          className={`${styles["category_chip"]} ${
            category.includes("club") && styles["active_category_chip"]
          } `}
        >
          <i className="fas fa-guitar"></i>
          <p>Club</p>
        </button>
      </div>

      <button
        onClick={() => createTravelPlan(prompt)}
        className={styles["search_btn"]}
      >
        Search
      </button>
    </div>
  );
};

export default Form;
