import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import log from "../../e2e/pageObject/Log";

const users = require("../../fixtures/users.json");

Given("Que el usuario esta en la pagina de incio de sesion", () => {
  log.visit("/");
});

When("el usuario ingresa las credenciales validas", () => {
  const { username, password } = users.validUser;
  log.enterUsername(username);
  log.enterPassword(password);
  log.clickLogin();
});

When("el usuario ingresa las credenciales incorrectas", () => {
  const { username, password } = users.invalidUser;
  log.enterUsername(username);
  log.enterPassword(password);
  log.clickLogin();
});

Then("es redireccionado a la pagina de inicio", () => {
  cy.url().should("include", "/inventory.html"); 
});

Then("el usuario ve el mensaje de error", () => {
  cy.get("h3").should("be.visible").and("have.text", "Epic sadface: Username and password do not match any user in this service");
});