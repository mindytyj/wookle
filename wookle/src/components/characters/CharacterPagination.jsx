import { Link } from "react-router-dom";

export default function CharacterPagination() {
  return (
    <nav aria-label="Characters Page Navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item page-link">Page</li>
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
      </ul>
    </nav>
  );
}
