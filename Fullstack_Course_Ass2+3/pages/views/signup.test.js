import { createMocks } from "node-mocks-http";
import Signuphandler from "../../pages/api/auth/signup";
import { render, screen } from "@testing-library/react";
import Signup from "./Signup";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

jest.mock("cloudinary", () => ({
  config: jest.fn(),
  v2: {
    uploader: {
      upload: jest.fn((filepath, callback) => {
        const result = { secure_url: "https://dummy-url.com/image.jpg" };
        callback(null, result);
      }),
    },
  },
}));

// Mock useRouter hook
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({}),
}));

describe("api/auth/signup", () => {
  it("creates unique username and email and signs up", async () => {
    const formData = {
      name: "name",
      username: "username",
      password: "12345678",
      email: `gmail.com`,
      photo: null,
    };

    const { req, res } = createMocks({
      method: "POST",
      body: formData,
    });

    await Signuphandler(req, res);

    expect(res.statusCode).toBe(200);
  });

  it("attempt to delete a profile picture of a user", async () => {
    const formData = {
      email: `ee`,
    };

    const { req, res } = createMocks({
      method: "DELETE",
      body: formData,
    });

    await Signuphandler(req, res);

    expect(res.statusCode).toBe(200);
  });
});

describe("Signup", () => {
  it("should display an alert when submitting only the name.", async () => {
    render(<Signup />);

    const nameInput = screen.getByTestId("name-input");
    userEvent.type(nameInput, "Roy");

    // Simulate empty fields and form submission
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByTestId("error-id")).toHaveTextContent(
      "One or more fields are empty. Please enter valid input."
    );
  });

  it("should display an alert when submitting only the password", async () => {
    render(<Signup />);

    const passwordInput = screen.getByTestId("password-input");
    userEvent.type(passwordInput, "12345678");

    // Simulate empty fields and form submission
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByTestId("error-id")).toHaveTextContent(
      "One or more fields are empty. Please enter valid input."
    );
  });

  it("should display an alert when submitting only spaces in the username and password.", async () => {
    render(<Signup />);

    const nameInput = screen.getByTestId("name-input");
    userEvent.type(nameInput, "     " );

    const passwordInput = screen.getByTestId("password-input");
    userEvent.type(passwordInput, "     " );

    // Simulate empty fields and form submission
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByTestId("error-id")).toHaveTextContent(
      "One or more fields are empty. Please enter valid input."
    );
  });

  it("should display an alert when submitting empty inputs.", async () => {
    render(<Signup />);

    // Simulate empty fields and form submission
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByTestId("error-id")).toHaveTextContent(
      "One or more fields are empty. Please enter valid input."
    );
  });
});
