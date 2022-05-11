/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("test_login", (name, password) => {
  cy.visit("/");
  cy.get('[name="username"]').clear();
  cy.get('[name="username"]').type(name + " ");
  cy.get('[name="password"]').clear();
  cy.get('[name="password"]').type(password + " ");
  cy.get("form").submit();
});

Cypress.Commands.add("login_user", (name, password) => {
  cy.session([name, password], () => {
    cy.visit("/");
    cy.get('[name="username"]').type(name);
    cy.get('[name="password"]').type(password);
    cy.get("form").submit();

    cy.url().should("contain", "/Home");
  });
});
