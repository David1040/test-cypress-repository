Feature: Login Functionality
  As a user of SauceDemo
  I want to test the login functionality
  To ensure it works as expected
  Background: 
    Given Que el usuario esta en la pagina de incio de sesion
  Scenario: Login successfully with valid credentials
      When el usuario ingresa las credenciales validas 
      Then es redireccionado a la pagina de inicio 
  Scenario: Login successfully with wrong credentials
      When el usuario ingresa las credenciales incorrectas
      Then el usuario ve el mensaje de error 
  

      