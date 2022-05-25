import React from "react";

function Sidebar() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div key={item}>
          <div className="sidebar-item">My Product {item}</div>
          <hr></hr>
        </div>
      ))}
    </>
  );
}

export default Sidebar;
