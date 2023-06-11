import CharacterDetails from "./CharacterDetails";
import CharacterPagination from "./CharacterPagination";

export default function Characters() {
  return (
    <>
      <h1>Star Wars Characters</h1>
      <CharacterDetails />
      <CharacterPagination />
    </>
  );
}
