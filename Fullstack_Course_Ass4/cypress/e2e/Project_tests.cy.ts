describe("Signup", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/views/signup");
  });

  it("should display an alert when submitting only the name.", () => {
    cy.get("[data-testid=name-input]").type("Roy");
    cy.contains("Submit").click();
    cy.get("[data-testid=error-id]").should("have.text", "One or more fields are empty. Please enter valid input.");
  });

  it("should display an alert when submitting only the password", () => {
    cy.get("[data-testid=password-input]").type("12345678");
    cy.contains("Submit").click();
    cy.get("[data-testid=error-id]").should("have.text", "One or more fields are empty. Please enter valid input.");
  });

  it("should display an alert when submitting only spaces in the username and password.", () => {
    cy.get("[data-testid=name-input]").type("     ");
    cy.get("[data-testid=password-input]").type("     ");
    cy.contains("Submit").click();
    cy.get("[data-testid=error-id]").should("have.text", "One or more fields are empty. Please enter valid input.");
  });

  it("should display an alert when submitting empty inputs.", () => {
    cy.contains("Submit").click();
    cy.get("[data-testid=error-id]").should("have.text", "One or more fields are empty. Please enter valid input.");
  });
});

describe("Signin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/views/signin"); 
  });

  it("should display an alert when submitting empty inputs.", () => {
    cy.contains("Login").click();
    cy.get("[data-testid=error-id]").should("have.text", "one or more fields are empty, Please enter valid input");
  });

  it("should display an alert when submitting only the name", () => {
    cy.get("[data-testid=name-input]").type("Roy");
    cy.contains("Login").click();
    cy.get("[data-testid=error-id]").should("have.text", "one or more fields are empty, Please enter valid input");
  });

  it("should display an alert when submitting only the password", () => {
    cy.get("[data-testid=password-input]").type("12345678");
    cy.contains("Login").click();
    cy.get("[data-testid=error-id]").should("have.text", "one or more fields are empty, Please enter valid input");
  });

  it("should display an alert when submitting only spaces in the username and password", () => {
    cy.get("[data-testid=password-input]").type("    ");
    cy.get("[data-testid=name-input]").type("    ");
    cy.contains("Login").click();
    cy.get("[data-testid=error-id]").should("have.text", "one or more fields are empty, Please enter valid input");
  });
});