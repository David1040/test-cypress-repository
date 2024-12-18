

class log {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }

    enterUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLogin() {
      cy.get('#login-button').click();
    }

    verifyErrorMessage(mensajeEsperado){
      cy.get(this.mensajeEsperado).should('be.visible').and('have.text',mensajeEsperado)
    }
  
  }

  export default new log();