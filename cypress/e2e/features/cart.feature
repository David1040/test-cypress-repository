@add-Cart
Feature: Gestión del carrito de compras

  Background:
    Given Que el usuario se encuentra en la pagina de incio de sesion
    When el usuario ingresa Usuario y Password validos
    Then el sistema muestra la pagina principal con los productos

  @add-product
  Scenario: Agregar un producto al carrito
    When el usuario agrega un producto al carrito
    Then el producto deberia aparecer en el carrito

  @verify-product
  Scenario: Verificar que un producto agregado aparece en el carrito
    Given Que el usuario ha agregado un producto al carrito
    When el usuario revisa el carrito
    Then el producto deberia estar presente en el carrito