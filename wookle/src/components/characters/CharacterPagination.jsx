import { useState } from "react";
import { Link } from "react-router-dom";

export default function CharacterPagination() {
  const [page, setPage] = useState("");

  function handleChange(event) {
    setPage(event.target.value);
  }

  console.log(page);

  return (
    <nav aria-label="Characters Page Navigation">
      <ul onChange={handleChange} className="pagination">
        <li value="previous" className="page-item">
          <Link to={`/people/?page=${page}`} className="page-link">
            Previous
          </Link>
        </li>
        <li value="1" className="page-item">
          <Link to={"/people/?page=1"} className="page-link">
            1
          </Link>
        </li>
        <li value="2" className="page-item">
          <Link to={"/people/?page=2"} className="page-link">
            2
          </Link>
        </li>
        <li value="3" className="page-item">
          <Link to={"/people/?page=3"} className="page-link">
            3
          </Link>
        </li>
        <li value="4" className="page-item">
          <Link to={"/people/?page=4"} className="page-link">
            4
          </Link>
        </li>
        <li value="5" className="page-item">
          <Link to={"/people/?page=5"} className="page-link">
            5
          </Link>
        </li>
        <li value="6" className="page-item">
          <Link to={"/people/?page=6"} className="page-link">
            6
          </Link>
        </li>
        <li value="7" className="page-item">
          <Link to={"/people/?page=7"} className="page-link">
            7
          </Link>
        </li>
        <li value="8" className="page-item">
          <Link to={"/people/?page=8"} className="page-link">
            8
          </Link>
        </li>
        <li value="9" className="page-item">
          <Link to={"/people/?page=9"} className="page-link">
            9
          </Link>
        </li>
        <li value="next" className="page-item">
          <Link to={``} className="page-link">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
