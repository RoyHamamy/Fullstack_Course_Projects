import { createMocks } from "node-mocks-http";
import Signinhandler from "../../pages/api/auth/signin";
import { render, screen } from "@testing-library/react";
import Signin from "./Signin";
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

describe("api/auth/signin", () => {
  it("fail to log in a user that doesnt exist", async () => {
    const uniqueString = Date.now().toString();
    let password = "12345678";
    const body = { email: uniqueString, password: password };

    const { req, res } = createMocks({
      method: "POST",
      body: body,
    });

    await Signinhandler(req, res);

    expect(res.statusCode).toBe(404);
  });
});

describe("Signin", () => {
  it("should display an alert when submitting empty inputs.", async () => {
    render(<Signin />);

    // Simulate empty fields and form submission
    userEvent.click(screen.getByText("Login"));

    expect(screen.getByTestId("error-id")).toHaveTextContent("one or more fields are empty, Please enter valid input");
  });

  it("should display an alert when submitting only the name", async () => {
    render(<Signin />);

    const nameInput = screen.getByTestId("name-input");
    userEvent.type(nameInput, "Roy");

    // Simulate empty fields and form submission
    userEvent.click(screen.getByText("Login"));

    expect(screen.getByTestId("error-id")).toHaveTextContent("one or more fields are empty, Please enter valid input");
  });

  it("should display an alert when submitting only the password", async () => {
    render(<Signin />);

    const passwordInput = screen.getByTestId("password-input");
    userEvent.type(passwordInput, "12345678");

    // Simulate empty fields and form submission
    userEvent.click(screen.getByText("Login"));

    expect(screen.getByTestId("error-id")).toHaveTextContent("one or more fields are empty, Please enter valid input");
  });

  it("should display an alert when submitting only spaces in the username and password", async () => {
    render(<Signin />);

    const passwordInput = screen.getByTestId("password-input");
    userEvent.type(passwordInput, "    ");

    const nameInput = screen.getByTestId("name-input");
    userEvent.type(nameInput, "    ");

    // Simulate empty fields and form submission
    userEvent.click(screen.getByText("Login"));

    expect(screen.getByTestId("error-id")).toHaveTextContent("one or more fields are empty, Please enter valid input");
  });
});
