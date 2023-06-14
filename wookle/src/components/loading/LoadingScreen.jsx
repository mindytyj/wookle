export default function LoadingScreen() {
  return (
    <div className="text-center">
      <div
        className="spinner-border ml-auto"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
        aria-hidden="true"
      ></div>
      <h2>Loading</h2>
    </div>
  );
}
