import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../hooks/useCartDetails";
import CategoryService from "../service/Category.service";

function Sidebar() {
  const [category, setCategory] = useState(null);

  const { updateCategoryId } = useContext(CartContext);

  const fetchCategories = async () => {
    const { data } = await CategoryService.getAllCategories();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const getProductByCategoryId = (categoryId) => {
    updateCategoryId(categoryId);
  };

  return (
    <>
      {category && (
        <>
          <div
            className="sidebar-item"
            onClick={() => {
              getProductByCategoryId("all_categories");
            }}
          >
            All Categories
          </div>
          <hr></hr>
          {category.map((item, index) => (
            <div key={item.id}>
              <div
                className="sidebar-item"
                onClick={() => {
                  getProductByCategoryId(item.id);
                }}
              >
                {item.name}
              </div>
              <hr></hr>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Sidebar;
