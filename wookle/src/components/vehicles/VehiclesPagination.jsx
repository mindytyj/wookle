export default function VehiclesPagination({ setSearchParams }) {
  function handleClick(event) {
    setSearchParams({ page: event.target.value });
  }

  return (
    <nav aria-label="Vehicles Page Navigation">
      <ul className="pagination justify-content-center">
        <button className="page-item page-link" disabled>
          Page
        </button>
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
      </ul>
    </nav>
  );
}
