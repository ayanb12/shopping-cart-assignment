import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../pages/Login";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Testing Login", () => {
  test("inputs should be initially empty", () => {
    render(<Login />);
    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByLabelText("Password");
    expect(
      screen.getByText(
        /Get access to your Orders. Whishlist and Recommendations./
      )
    ).toBeInTheDocument();

    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  test("If user try to submit without giving any value", () => {
    render(<Login />);
    const submitBtn = screen.getByRole("button");

    expect(screen.queryByText(/Please fill the details!/)).toBeNull();
    userEvent.click(submitBtn);
    expect(screen.queryByText(/Please fill the details!/)).toBeInTheDocument();
  });

  test("For password validation", async () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText("Password");
    const emailInput = screen.getByRole("textbox");
    const submitBtn = screen.getByRole("button");

    await userEvent.type(emailInput, "ayan@gmail.com");
    await userEvent.type(passwordInput, "1234");

    userEvent.click(submitBtn);

    expect(
      screen.queryByText(/Password should be minimum 6 characters!/)
    ).toBeInTheDocument();

    await userEvent.type(passwordInput, "123456");

    userEvent.click(submitBtn);

    expect(
      screen.queryByText(/Password should be minimum 6 characters!/)
    ).not.toBeInTheDocument();
  });

  test("If any fields are empty or not", async () => {
    render(<Login />);
    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByLabelText("Password");
    const submitBtn = screen.getByRole("button");

    expect(screen.queryByText(/Please fill the details!/)).toBeNull();
    await userEvent.type(emailInput, "ayan@gmail.com");
    userEvent.click(submitBtn);

    expect(screen.queryByText(/Please fill the details!/)).toBeInTheDocument();
  });
});
