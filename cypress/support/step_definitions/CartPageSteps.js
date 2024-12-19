import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../e2e/pageObject/CartPage";
import log from "../../e2e/pageObject/Log";

// Paso para agregar un producto al carrito
Given("Que el usuario ha agregado un producto al carrito", () => {
    // Cambia "Sauce Labs Backpack" por el producto que desees probar
    CartPage.addProduct("Sauce Labs Backpack");
  });
  
  // Paso para revisar el carrito
  When("el usuario revisa el carrito", () => {
    CartPage.goToCart();
  });
  
  // Paso para verificar que un producto esté presente en el carrito
  Then("el producto deberia estar presente en el carrito", () => {
    // Cambia "Sauce Labs Backpack" por el producto que desees probar
    CartPage.verifyProductInCart("Sauce Labs Backpack");
  });
  
  // Paso para agregar un producto en el flujo de agregar al carrito
  When("el usuario agrega un producto al carrito", () => {
    // Cambia "Sauce Labs Backpack" por el producto que desees probar
    CartPage.addProduct("Sauce Labs Backpack");
  });
  
  // Paso para verificar que el producto aparece en el carrito tras agregarlo
  Then("el producto deberia aparecer en el carrito", () => {
    // Cambia "Sauce Labs Backpack" por el producto que desees probar
    CartPage.verifyProductInCart("Sauce Labs Backpack");
  });