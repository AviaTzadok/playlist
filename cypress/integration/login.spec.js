/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("login", () => {
  beforeEach(() => {
    cy.url().should("not.contain", "Home").as("not_contain_Home");
  });

  it("possibility login", () => {
    cy.test_login("Avia", "1234");
    cy.url().should("eq", "http://localhost:3000/Home");
  });

  it("not possibility submit with username or password field empty", () => {
    cy.test_login("Avia", "");
    cy.get("@not_contain_Home");

    cy.test_login("", "1234");
    cy.get("@not_contain_Home");
  });

  it("not possibility login with wrong password or wrong user name", () => {
    cy.test_login("Aviaa", "1234");
    cy.get("@not_contain_Home");

    cy.test_login("Avia", "12345");
    cy.get("@not_contain_Home");
  });
});
