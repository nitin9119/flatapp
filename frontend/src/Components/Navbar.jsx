import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div
      style={{
        border: "3px solid darkblue",
        borderRadius: "10px",
        padding: "10px",
        color: "green",
        justifyContent: " right",
        display: "flex",
      }}
    >
      <div style={{ marginRight: "25%", color: "blue", fontSize: "30px" }}>
        Apartment Manager App
      </div>
      <div
        style={{
          margin: "0 20px 0 20px",
        }}
      >
        login
      </div>
      <div
        style={{
          margin: "0 20px 0 20px",
        }}
      >
        signup
      </div>
    </div>
  );
}
