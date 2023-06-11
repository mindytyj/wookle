import { useNavigate } from "react-router-dom";

export default function SearchButton({ selection }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${selection}`);
  }

  return (
    <button type="button" className="btn btn-warning" onClick={handleClick}>
      Wookle Search
    </button>
  );
}
