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
        <ul key={park.ParkName}>
          <li>{park.ParkName}</li>
          <li>{park.Size}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
