import { Link, useSearchParams } from "react-router-dom";

export default function CharacterPagination({ setSearchParams }) {
  function handleClick(event) {
    setSearchParams({ page: event.target.value });
  }

  return (
    <nav aria-label="Characters Page Navigation">
      <ul className="pagination justify-content-center">
        <button className="page-item page-link">Page</button>
        <button value="1" className="page-item page-link" onClick={handleClick}>
          1
        </button>
        <button value="2" className="page-item page-link" onClick={handleClick}>
          2
        </button>
        <button value="3" className="page-item page-link" onClick={handleClick}>
          3
        </button>
        <button value="4" className="page-item page-link" onClick={handleClick}>
          4
        </button>
        <button value="5" className="page-item page-link" onClick={handleClick}>
          5
        </button>
        <button value="6" className="page-item page-link" onClick={handleClick}>
          6
        </button>
        <button value="7" className="page-item page-link" onClick={handleClick}>
          7
        </button>
        <button value="8" className="page-item page-link" onClick={handleClick}>
          8
        </button>
        <button value="9" className="page-item page-link" onClick={handleClick}>
          9
        </button>
      </ul>
    </nav>
  );
}
