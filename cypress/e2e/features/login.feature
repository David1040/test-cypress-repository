@Login
Feature: Inicio de sesion en Swalabs
    Como usuario de SwagLabs
    Quiero poder inciar sesion en la plataforma
    Para poder ver los productos y realizar compras
  Background: 
    Given Que el usuario se encuentra en la pagina de incio de sesion
  @login-success
  Scenario: Inicio de sesíon exitoso con credenciales validas 
      When el usuario ingresa Usuario y Password validos 
      Then el sistema muestra la pagina principal con los productos
 @login-error  
  Scenario: Inicio de sesíon con usuario o password incorrectos
      When el usuario ingresa  Usuario o Password incorrectos
      Then el sistema muestra un mensaje de error que indica credenciales incorrectas
   @login-locked
  Scenario: Inicio de sesíon con usuario bloqueado 
      When el usuario ingresa con un usuario que esta bloqueado
      Then el sistema muestra un mensaje que indica que el usuario fue bloqueado 

      