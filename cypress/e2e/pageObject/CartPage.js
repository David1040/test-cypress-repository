class CartPage{

    addProduct(productName) {
        // Encuentra el producto por su nombre y haz clic en "Agregar al carrito"
        cy.contains('.inventory_item', productName)
          .find('button') // Encuentra el botón dentro del producto
          .click();
      }
    
      goToCart() {
        // Haz clic en el ícono del carrito
        cy.get('.shopping_cart_link').click();
      }
    
      verifyProductInCart(productName) {
        // Verifica que el producto esté en el carrito
        cy.get('.inventory_item_name').should('contain.text', productName);
      }
}

export default new CartPage();

