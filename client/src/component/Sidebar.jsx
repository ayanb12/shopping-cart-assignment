import React, { useEffect, useState } from "react";
import CategoryService from "../service/Category.service";

function Sidebar() {
  const [category, setCategory] = useState(null);
  const fetchCategories = async () => {
    const { data } = await CategoryService.getAllCategories();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {category &&
        category.map((item, index) => (
          <div key={item.id}>
            <div className="sidebar-item">{item.name}</div>
            <hr></hr>
          </div>
        ))}
    </>
  );
}

export default Sidebar;
