import { useState, useEffect } from "react";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function displayVehicles() {
      const response = await fetch("https://swapi.dev/api/vehicles");
      const jsonData = await response.json();
      setVehicles(jsonData.results);
    }
    displayVehicles();
  }, []);

  return (
    <>
      <h1>Star Wars Vehicles</h1>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index}>{vehicle.name}</li>
        ))}
      </ul>
    </>
  );
}
