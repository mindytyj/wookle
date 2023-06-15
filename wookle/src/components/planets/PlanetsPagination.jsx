export default function PlanetsPagination({ setSearchParams }) {
  function handleClick(event) {
    setSearchParams({ page: event.target.value });
  }

  return (
    <nav aria-label="Planets Page Navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="page-link bg-warning text-dark" disabled>
            Page
          </button>
        </li>
        <li className="page-item">
          <button
            value="1"
            className="page-link bg-warning text-dark"
            onClick={handleClick}
          >
            1
          </button>
        </li>
        <li className="page-item">
          <button
            value="2"
            className="page-link bg-warning text-dark"
            onClick={handleClick}
          >
            2
          </button>
        </li>
        <li className="page-item">
          <button
            value="3"
            className="page-link bg-warning text-dark"
            onClick={handleClick}
          >
            3
          </button>
        </li>
        <li className="page-item">
          <button
            value="4"
            className="page-link bg-warning text-dark"
            onClick={handleClick}
          >
            4
          </button>
        </li>
        <li className="page-item">
          <button
            value="5"
            className="page-link bg-warning text-dark"
            onClick={handleClick}
          >
            5
          </button>
        </li>
        <li className="page-item">
          <button
            value="6"
            className="page-link bg-warning text-dark"
            onClick={handleClick}
          >
            6
          </button>
        </li>
      </ul>
    </nav>
  );
}
