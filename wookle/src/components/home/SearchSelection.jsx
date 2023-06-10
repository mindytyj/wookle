import { useState } from "react";

export default function SearchSelection() {
  const [selection, setSelection] = useState("");

  function handleChange(event) {
    setSelection(event.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="people">Characters</option>
      <option value="films">Films</option>
      <option value="planets">Planets</option>
      <option value="species">Species</option>
      <option value="starships">Starships</option>
      <option value="vehicles">Vehicles</option>
    </select>
  );
}
