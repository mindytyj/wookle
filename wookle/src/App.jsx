import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Characters from "./components/Characters";
import Films from "./components/Films";
import Home from "./components/Home";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import NavBar from "./components/NavBar";
import CharacterDetails from "./components/CharacterDetails";
import FilmDetails from "./components/FilmDetails";
import PlanetDetails from "./components/PlanetDetails";
import SpeciesDetails from "./components/SpeciesDetails";
import StarshipDetails from "./components/StarshipDetails";
import VehicleDetails from "./components/VehicleDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<Characters />} />
        <Route path="/people/:id" element={<CharacterDetails />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmDetails />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
        <Route path="/species" element={<Species />} />
        <Route path="/species/:id" element={<SpeciesDetails />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<VehicleDetails />} />
        <Route path="/*" element={<h1>Error 404: No page found</h1>} />
      </Routes>
    </>
  );
}

export default App;
