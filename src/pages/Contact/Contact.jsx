import React from "react";
import styles from "./Contact.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <div className={styles["contact"]}>
      <Navbar />

      <div className={styles["contact__content"]}>
        <h1 className={styles["contact__content__title"]}>Contact Creators</h1>

        <div className={styles["contact_us_container"]}>
          <div className={styles["single_person_card"]}>
            {/* <div className={styles["person_image"]}></div> */}
            <p className={styles["person_name"]}>Om Gaikwad</p>
            <p className={styles["person_email"]}>omgaikwad645@gmail.com</p>
            <p className={styles["person_phone"]}>(+91) 8529726077</p>
          </div>
          <div className={styles["single_person_card"]}>
            {/* <div className={styles["person_image"]}></div> */}
            <p className={styles["person_name"]}>Dhanraj Pawar</p>
            <p className={styles["person_email"]}>dhanrajpawarwork@gmail.com</p>
            <p className={styles["person_phone"]}>(+91) 9423860660</p>
          </div>
          <div className={styles["single_person_card"]}>
            {/* <div className={styles["person_image"]}></div> */}
            <p className={styles["person_name"]}>Nachiket Barhate</p>
            <p className={styles["person_email"]}>nachiketgb99@gmail.com</p>
            <p className={styles["person_phone"]}>(+91) 9307340300</p>
          </div>
          <div className={styles["single_person_card"]}>
            {/* <div className={styles["person_image"]}></div> */}
            <p className={styles["person_name"]}>Tejas Jadhav</p>
            <p className={styles["person_email"]}>tejasprjadhav@gmail.com</p>
            <p className={styles["person_phone"]}>(+91) 8446317645</p>
          </div>
          <div className={styles["single_person_card"]}>
            {/* <div className={styles["person_image"]}></div> */}
            <p className={styles["person_name"]}>Abhay Shinde</p>
            <p className={styles["person_email"]}>abhayshinde498@gmail.com</p>
            <p className={styles["person_phone"]}>(+91) 8625922947</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
