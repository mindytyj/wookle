export default function PosterLoading() {
  return (
    <div className="text-center">
      <div
        className="spinner-border text-warning ml-auto"
        style={{ width: "2rem", height: "2rem" }}
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}
