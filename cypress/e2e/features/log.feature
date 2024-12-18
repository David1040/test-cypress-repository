Feature: Login Functionality
  As a user of SauceDemo
  I want to test the login functionality
  To ensure it works as expected

  Scenario: Login successfully with valid credentials
    Given Que el usuario esta en la pagina de incio de sesion
    
    
    When el usuario ingresa las credenciales validas 
    Then es redireccionado a la pagina de inicio 
   