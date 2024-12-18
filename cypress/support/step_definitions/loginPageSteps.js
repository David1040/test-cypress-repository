import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import log from "../../e2e/pageObject/Log";

const users = require("../../fixtures/users.json");

Given("Que el usuario se encuentra en la pagina de incio de sesion", () => {
  log.visit("/");
});

When("el usuario ingresa Usuario y Password validos", () => {
  const { username, password } = users.validUser;
  log.enterUsername(username);
  log.enterPassword(password);
  log.clickLogin();
});

When("el usuario ingresa  Usuario o Password incorrectos", () => {
  const { username, password } = users.invalidUser;
  log.enterUsername(username);
  log.enterPassword(password);
  log.clickLogin();
});
When("el usuario ingresa con un usuario que esta bloqueado",()=>{
  const {username, password}= users.lockedUser;
  log.enterUsername(username);
  log.enterPassword(password);
  log.clickLogin();
})

Then("el sistema muestra la pagina principal con los productos", () => {
  cy.url().should("include", "/inventory.html"); 
});

Then("el sistema muestra un mensaje de error que indica credenciales incorrectas", () => {
  cy.get("h3").should("be.visible").and("have.text", "Epic sadface: Username and password do not match any user in this service");
});

Then("el sistema muestra un mensaje que indica que el usuario fue bloqueado",()=>{
  cy.get("h3").should("be.visible").and("have.text", "Epic sadface: Sorry, this user has been locked out.");
});
