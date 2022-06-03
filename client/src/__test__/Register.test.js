import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Register from "../pages/Register";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

let Elements;
const setElements = () => {
  render(<Register />);
  const firstNameInput = screen.getByLabelText("First Name");
  const lastNameInput = screen.getByLabelText("Last Name");
  const emailInput = screen.getByLabelText("Email");
  const password = screen.getByLabelText("Password");
  const confirmPassword = screen.getByLabelText("Confirm Password");
  const submitBtn = screen.getByRole("button");

  Elements = {
    firstNameInput,
    lastNameInput,
    emailInput,
    password,
    confirmPassword,
    submitBtn,
  };
};

beforeEach(() => setElements());

describe("Testing Register", () => {
  test("inputs should be initially empty", () => {
    expect(Elements.firstNameInput.value).toBe("");
    expect(Elements.lastNameInput.value).toBe("");
    expect(Elements.emailInput.value).toBe("");
    expect(Elements.password.value).toBe("");
    expect(Elements.confirmPassword.value).toBe("");
  });

  test("If user try to submit without giving any value", async () => {
    expect(screen.queryByText(/Please fill the details!/)).toBeNull();

    userEvent.click(Elements.submitBtn);

    expect(screen.getByText("Please fill the details!")).toBeInTheDocument();

    await userEvent.type(Elements.firstNameInput, "John");
    userEvent.click(Elements.submitBtn);
    expect(screen.getByText("Please fill the details!")).toBeInTheDocument();

    await userEvent.type(Elements.lastNameInput, "Snow");
    userEvent.click(Elements.submitBtn);
    expect(screen.getByText("Please fill the details!")).toBeInTheDocument();

    await userEvent.type(Elements.emailInput, "john@gmail.com");
    userEvent.click(Elements.submitBtn);
    expect(screen.getByText("Please fill the details!")).toBeInTheDocument();

    await userEvent.type(Elements.password, "1234");
    userEvent.click(Elements.submitBtn);
    expect(screen.getByText("Please fill the details!")).toBeInTheDocument();

    expect(
      screen.queryByText("Password should be minimum 6 characters!")
    ).toBeNull();
    await userEvent.type(Elements.confirmPassword, "12345");
    userEvent.click(Elements.submitBtn);
    expect(
      screen.getByText("Password should be minimum 6 characters!")
    ).toBeInTheDocument();

    expect(screen.queryByText("Password does not match!")).toBeNull();
    await userEvent.type(Elements.password, "123456");
    userEvent.click(Elements.submitBtn);
    expect(screen.getByText("Password does not match!")).toBeInTheDocument();
  });
});
