export default function DeleteFavourite({
  favouriteId,
  favourites,
  setFavourites,
}) {
  async function deleteFavourite(id) {
    const response = await fetch(
      `https://api.airtable.com/v0/appQcnrN49tQLpv5Y/favourites/${id}/?api_key=keymttnxc2E87Sin8`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      setFavourites(favourites.filter((favourite) => favourite.id !== id));
    }
  }

  return (
    <button
      className="btn btn-warning"
      onClick={() => deleteFavourite(favouriteId)}
    >
      Delete
    </button>
  );
}
