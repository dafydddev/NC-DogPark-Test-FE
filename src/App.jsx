import { useState, useEffect } from "react";
import "./App.css";
import parks from "../api/api";

function App() {
  const [parksData, setParkData] = useState([]);
  useEffect(() => {
    parks.get("/parks").then(({ data }) => {
      setParkData(data);
    });
  }, []);

  return (
    <>
      {parksData.map((park) => (
        <ul key={park.park_name}>
          <li>Name: {park.park_name}</li>
          <li>Rating: {park.star_rating}</li>
          <li>Lat: {park.geolocation._latitude}</li>
          <li>Lat: {park.geolocation._longitude}</li>
        </ul>
      ))}
    </>
  );
}

export default App;