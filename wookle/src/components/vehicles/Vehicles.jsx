import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VehiclesPagination from "./VehiclesPagination";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  let page = parseInt(searchParams.get("page"));

  useEffect(() => {
    async function displayVehicles() {
      const response = await fetch(
        page
          ? `https://swapi.dev/api/vehicles/?page=${page}`
          : `https://swapi.dev/api/vehicles`
      );
      const jsonData = await response.json();
      setVehicles(jsonData.results);
    }
    displayVehicles();
  }, [searchParams]);

  return (
    <div className="container">
      <h1>Star Wars Vehicles</h1>
      <br />
      <div className="row row-cols-1 grid gap-2 justify-content-center">
        {vehicles.map((vehicle) => (
          <div
            className="card card border-warning mb-2"
            style={{ width: "16rem" }}
          >
            <h5 className="card-title">{vehicle.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Model: {vehicle.model}</li>
              <li className="list-group-item">
                Vehicle Class: {vehicle.vehicle_class}
              </li>
              <li className="list-group-item">
                Max Atmosphering Speed: {vehicle.max_atmosphering_speed}
              </li>
              <li className="list-group-item">
                Cargo Capacity: {vehicle.cargo_capacity}
              </li>
              <li className="list-group-item">Length: {vehicle.length}</li>
            </ul>
          </div>
        ))}
      </div>
      <VehiclesPagination setSearchParams={setSearchParams} />
    </div>
  );
}
