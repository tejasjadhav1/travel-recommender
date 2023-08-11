import React from "react";
import styles from "./PlaceCard.module.css";

const PlaceCard = ({ data }) => {
  return (
    <div className={styles["placecard"]}>
      <div className={styles["placecard__description"]}>{data}</div>
    </div>
  );
};

export default PlaceCard;
