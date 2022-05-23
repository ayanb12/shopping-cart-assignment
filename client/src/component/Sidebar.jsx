import React from "react";

function Sidebar() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <>
          <div className="sidebar-item">My Product {item}</div>
          <hr></hr>
        </>
      ))}
    </>
  );
}

export default Sidebar;
