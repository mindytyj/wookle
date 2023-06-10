import { useNavigate } from "react-router-dom";

export default function SearchButton() {
  function handleClick() {
    const navigate = useNavigate();

    navigate(`/${selection}`);
  }

  return (
    <button type="button" className="btn btn-warning" onClick={handleClick}>
      Wookle Search
    </button>
  );
}
