import React from "react";

function Classes() {
  return (
    <div className="section">
      <h2>Our Classes</h2>

      <div className="card">
        <h3>Child Art</h3>
        <p>Nursery to 2nd (3–7 yrs)</p>
      </div>

      <div className="card">
        <h3>Young Art</h3>
        <p>3rd to 5th (8–10 yrs)</p>
      </div>

      <div className="card">
        <h3>Art Grade</h3>
        <p>6th to Intermediate (11–14 yrs)</p>
      </div>

      <div className="card">
        <p><strong>Duration:</strong> 2 hrs/week</p>
        <p><strong>Mode:</strong> Online + Offline</p>
        <p><strong>Sessions:</strong> 12 / 14</p>
      </div>
    </div>
  );
}

export default Classes;