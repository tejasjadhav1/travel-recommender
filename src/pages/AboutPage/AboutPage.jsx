import React from "react";
import styles from "./AboutPage.module.css";
import Navbar from "../../components/Navbar/Navbar";

const AboutPage = () => {
  return (
    <div className={styles["about"]}>
      <Navbar />

      <div className={styles["about__content"]}>
        <h1 className={styles["about__content__title"]}>About</h1>

        <p className={styles["about__content__text"]}>
          TripWise AI is a travel recommender app that uses the OpenAI's
          Generative Pre-trained Transformer 3 which is autoregressive language
          model released by OpenAI in 2020 that uses deep learning to produce
          human-like text to generate a travel plan based on a user's input. The
          user can input their name, age, and destination, and the application
          will generate a travel plan based on the user's input. The user can
          also select from a list of categories to include in their travel plan.
          The application will then generate a travel plan based on the user's
          input and the selected categories. The user can then view the
          generated travel plan and save it to their profile.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
