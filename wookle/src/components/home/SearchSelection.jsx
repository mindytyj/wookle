export default function SearchSelection({ searchSelection }) {
  function handleChange(event) {
    if (event.target.value === "default") {
      return;
    }
    searchSelection(event.target.value);
  }

  return (
    <select
      className="form-select form-select-lg mb-3"
      aria-label="Wookle Search Menu"
      onChange={handleChange}
    >
      <option value="default">What are you wooking for?</option>
      <option value="people">Characters</option>
      <option value="films">Films</option>
      <option value="planets">Planets</option>
      <option value="species">Species</option>
      <option value="starships">Starships</option>
      <option value="vehicles">Vehicles</option>
      <option value="favourites">Favourites</option>
    </select>
  );
}
