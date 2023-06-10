import SearchButton from "./SearchButton";
import SearchSelection from "./SearchSelection";

export default function Home() {
  return (
    <div className="container">
      <h1 className="mainHeader">Wookle</h1>
      <h2 className="subHeader">Oh Wookiee! All Things Star Wars!</h2>
      <br />
      <SearchSelection />
      <br />
      <SearchButton />
    </div>
  );
}
