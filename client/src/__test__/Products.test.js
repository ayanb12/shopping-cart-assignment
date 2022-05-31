import React from "react";
import { screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "../pages/Products";
import CartProvider from "../hooks/useCartDetails";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

describe("Products Page Component", () => {
  test("loading all the products", async () => {
    const products = [
      {
        category: "5b6899953d1a866534f516e2",
        description:
          "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        id: "5b6c6a7f01a7c38429530883",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        name: "Fresho Kiwi - Green, 3 pcs",
        price: 87,
        sku: "fnw-kiwi-3",
        stock: 50,
      },
      {
        category: "5b6899953d1a866534f516e2",
        description:
          "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
        id: "5b6c6aeb01a7c38429530884",
        imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
        name: "Apple - Washington, Regular, 4 pcs",
        price: 187,
        sku: "fnw-apple-4",
        stock: 50,
      },
    ];

    let categories = [
      {
        description:
          "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        id: "5b675e5e5936635728f9fc30",
        imageUrl: "/static/images/category/beverages.png",
        key: "beverages",
        name: "Beverages",
        order: 3,
      },
      {
        description:
          "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
        enabled: true,
        id: "5b6899123d1a866534f516de",
        imageUrl: "/static/images/category/bakery.png",
        key: "bakery-cakes-dairy",
        name: "Bakery Cakes and Dairy",
        order: 2,
      },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: categories })
    );
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: products }));

    const getAllProducts = jest.fn();
    const addItems = jest.fn();
    const allProducts = products;

    await act(async () => {
      render(
        <CartProvider value={{ getAllProducts, allProducts, addItems }}>
          <Products />
        </CartProvider>
      );
    });

    const items = await screen.findAllByRole("img");
    expect(items).toHaveLength(2);
    expect(
      screen.queryByText(/Fresho Kiwi - Green, 3 pcs/i)
    ).toBeInTheDocument();

    const buyNowBtn = screen.getAllByRole("button");
    userEvent.click(buyNowBtn[0]);
    expect(buyNowBtn[0]).toHaveProperty("disabled");
  });
});
