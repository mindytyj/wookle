export default function PlanetsPagination({ setSearchParams }) {
  function handleClick(event) {
    setSearchParams({ page: event.target.value });
  }

  return (
    <nav aria-label="Planets Page Navigation">
      <ul className="pagination justify-content-center">
        <button className="page-item page-link bg-warning text-dark" disabled>
          Page
        </button>
        <button
          value="1"
          className="page-item page-link bg-warning text-dark"
          onClick={handleClick}
        >
          1
        </button>
        <button
          value="2"
          className="page-item page-link bg-warning text-dark"
          onClick={handleClick}
        >
          2
        </button>
        <button
          value="3"
          className="page-item page-link bg-warning text-dark"
          onClick={handleClick}
        >
          3
        </button>
        <button
          value="4"
          className="page-item page-link bg-warning text-dark"
          onClick={handleClick}
        >
          4
        </button>
        <button
          value="5"
          className="page-item page-link bg-warning text-dark"
          onClick={handleClick}
        >
          5
        </button>
        <button
          value="6"
          className="page-item page-link bg-warning text-dark"
          onClick={handleClick}
        >
          6
        </button>
      </ul>
    </nav>
  );
}
