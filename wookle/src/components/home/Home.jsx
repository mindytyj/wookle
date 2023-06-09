import { useState } from "react";
import SearchButton from "./SearchButton";
import SearchSelection from "./SearchSelection";

export default function Home() {
  const [selection, setSelection] = useState("");

  const searchSelection = (select) => setSelection(select);

  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
      <h1 className="mainHeader">Wookle</h1>
      <h2 className="subHeader">Oh Wookiee! All Things Star Wars!</h2>
      <br />
      <SearchSelection searchSelection={searchSelection} />
      <br />
      <SearchButton selection={selection} />
    </div>
  );
}
