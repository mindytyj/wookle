import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CSS from "./App.css";
import Characters from "./components/characters/Characters";
import Films from "./components/films/Films";
import Home from "./components/home/Home";
import Planets from "./components/planets/Planets";
import Species from "./components/species/Species";
import Starships from "./components/starships/Starships";
import Vehicles from "./components/vehicles/Vehicles";
import NavBar from "./components/navbar/NavBar";
import ShowNavBar from "./components/navbar/ShowNavBar";
import CharacterDetails from "./components/characters/CharacterDetails";
import FilmDetails from "./components/films/FilmDetails";
import PlanetDetails from "./components/planets/PlanetDetails";
import SpeciesDetails from "./components/species/SpeciesDetails";
import Favourites from "./components/favourites/Favourites";
import EditFavourites from "./components/favourites/EditFavourites";

function App() {
  return (
    <>
      <ShowNavBar>
        <NavBar />
      </ShowNavBar>
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
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/favourites/:id" element={<EditFavourites />} />
        <Route path="/*" element={<h1>Error 404: No page found</h1>} />
      </Routes>
    </>
  );
}

export default App;
