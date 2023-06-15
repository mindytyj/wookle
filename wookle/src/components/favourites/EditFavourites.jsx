import LoadingScreen from "../loading/LoadingScreen";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditFavourites() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [favourite, setFavourite] = useState({});
  const [placeholder, setPlaceHolder] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFavourite() {
      setLoading(true);
      const response = await fetch(
        `https://api.airtable.com/v0/appQcnrN49tQLpv5Y/favourites/${id}/?api_key=keymttnxc2E87Sin8`
      );
      const jsonData = await response.json();
      setFavourite(jsonData);
      setPlaceHolder(jsonData.fields.name);
      setLoading(false);
    }
    fetchFavourite();
  }, []);

  if (loading === true) {
    return <LoadingScreen />;
  }

  function handleChange(event) {
    setFavourite({
      fields: {
        [event.target.name]: event.target.value,
      },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    async function updateFavourite() {
      const response = await fetch(
        `https://api.airtable.com/v0/appQcnrN49tQLpv5Y/favourites/${id}/?api_key=keymttnxc2E87Sin8`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(favourite),
        }
      );
      await response.json();
      navigate("/favourites");
    }
    updateFavourite();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center position-absolute top-50 start-50 translate-middle">
        <h1>Edit Favourite Character</h1>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <span className="input-group-text" id="inputGroup-sizing-default">
            Character Name
          </span>
          <input
            type="text"
            name="name"
            placeholder={placeholder}
            value={favourite.name}
            onChange={handleChange}
            className="form-control"
            aria-label="Change Character Name"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn btn-warning">Update</button>
      </div>
    </form>
  );
}
