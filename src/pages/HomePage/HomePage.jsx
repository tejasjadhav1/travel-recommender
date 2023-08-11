import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import axios from "axios";
import PlaceCard from "../../components/PlaceCard/PlaceCard";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    destination: "",
  });

  const [category, setCategory] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [resultString, setResultString] = useState("");
  const [resultArr, setResultArr] = useState([]);

  const inputHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const categoryChipHandler = (categoryChip) => {
    if (category.includes(categoryChip)) {
      setCategory((prev) => prev.filter((item) => item !== categoryChip));
    } else {
      setCategory((prev) => [...prev, categoryChip]);
    }
  };

  console.log(resultArr);

  useEffect(() => {
    if (resultString === "") return;
    setResultArr(resultString.split("\n"));
  }, [resultString]);

  const key = process.env.REACT_APP_OPEN_AI_KEY;

  const NoBearerAxios = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  });

  const createTravelPlan = async (prompt) => {
    if (prompt === "") return;

    const data = {
      prompt: prompt,
      max_tokens: 1024,
      n: 1,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    };
    try {
      console.log("api call went to openai");
      const response = await NoBearerAxios.post(
        "https://api.openai.com/v1/engines/text-davinci-002/completions",
        data,
        { headers }
      );
      console.log(response.data.choices[0].text);
      setResultString(response.data.choices[0].text);
      return response.data.choices[0].text;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (
      formData.name === "" ||
      formData.age === "" ||
      formData.destination === ""
    )
      return;

    setPrompt(
      `${formData.name} who is ${formData.age} years old and wants to go to ${
        formData.destination
      }.Give 5 places to visit with description.${
        category.length > 0
          ? `Only include categories ${category.join(", ")}.`
          : ""
      }`
    );
  }, [formData, category]);

  return (
    <div className={styles["home"]}>
      <Navbar />
      <Form
        category={category}
        inputHandler={inputHandler}
        categoryChipHandler={categoryChipHandler}
        prompt={prompt}
        createTravelPlan={createTravelPlan}
      />

      {resultString !== "" && (
        <div className={styles["result_container"]}>
          {resultString.split("\n").map((item, index) => {
            if (item === "") return;
            return <PlaceCard key={index} data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
