import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  // les useEffect se joue lorsque les composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
        <ul className="radio-container">
            <input type="range" min="1" max="250"/>
        </ul>
      <ul>
        {data.map((country, index) => (
        <Card key={index} country={country}/>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
