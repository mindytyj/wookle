import { useRef } from "react";

export default function CreateFavourites({ addCharacter }) {
  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function handleAddCharacter() {
    if (inputRef.current.value === " ") {
      return;
    }

    const characterData = {
      fields: {
        name: inputRef.current.value,
      },
    };

    const response = await fetch(
      "https://api.airtable.com/v0/appQcnrN49tQLpv5Y/favourites?api_key=keymttnxc2E87Sin8",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(characterData),
      }
    );
    const jsonData = await response.json();
    addCharacter(jsonData);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          ref={inputRef}
          placeholder="Name of Favourite Character"
          aria-label="Name of Favourite Character"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-warning"
          type="button"
          id="button-addon2"
          onClick={handleAddCharacter}
        >
          Add
        </button>
      </div>
    </form>
  );
}
