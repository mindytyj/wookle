export default function LoadingScreen() {
  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <div
        className="spinner-border text-warning ml-auto"
        style={{ width: "8rem", height: "8rem" }}
        role="status"
        aria-hidden="true"
      ></div>
      <h2 className="text-warning">Loading</h2>
    </div>
  );
}
