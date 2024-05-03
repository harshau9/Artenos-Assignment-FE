import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  let arr = [
    "Bangalore",
    "Delhi",
    "Kochi",
    "London",
    "Tokyo",
    "Sydney",
    "Texas",
    "Mumbai",
    "Moscow",
    "Dubai",
  ];
  const getData = async (city) => {
    try {
      const data = await axios.get(`http://localhost:3500/location/${city}`);
      setData(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getData(city);
  }, [city]);
  console.log(data);
  return (
    <div>
      <h2>Weather report</h2>
      <select onChange={(e) => setCity(e.target.value)}>
        {arr.map((el) => {
          return <option value={el}>{el}</option>;
        })}
      </select>

      <div >
        {data && (
          <>
            <h4>City Name: {data.name}</h4>
            <p>Temperature: {data.temperature} C</p>
            <p>Description: {data.description}</p>
            <p>Activities: {data.activities.join(", ")}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
