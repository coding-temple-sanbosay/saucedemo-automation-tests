// cypress/e2e/saucedemo.spec.cy.js

describe('SauceDemo - Automated Test Suite', () => {
    const username = 'standard_user';
    const validPassword = 'secret_sauce';
    const invalidPassword = 'wrong_password';
  
    // Function to perform login
    function login(user, pass) {
      cy.get('[data-test="username"]').type(user);
      cy.get('[data-test="password"]').type(pass);
      cy.get('[data-test="login-button"]').click();
    }
  
    beforeEach(() => {
      // Visit the SauceDemo website before each test
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('TC01 - Valid Login', () => {
      login(username, validPassword);
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });
  
    it('TC02 - Invalid Login', () => {
      login(username, invalidPassword);
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  
    it('TC03 - Navigate Through Product Pages', () => {
      login(username, validPassword);
  
      // Click on the first product
      cy.get('.inventory_item_name').first().click();
  
      // Verify product details page
      cy.get('.inventory_details_name').should('be.visible');
  
      // Go back to the products page
      cy.get('[data-test="back-to-products"]').click();
  
      // Verify we're back on the products page
      cy.get('.title').should('have.text', 'Products');
    });
  
    it('TC04 - Add Items to Cart', () => {
      login(username, validPassword);
  
      // Add first product to cart
      cy.get('[data-test^="add-to-cart"]').first().click();
  
      // Add second product to cart
      cy.get('[data-test^="add-to-cart"]').eq(1).click();
  
      // Click on the shopping cart icon
      cy.get('.shopping_cart_link').click();
  
      // Verify both items are in the cart
      cy.get('.cart_item').should('have.length', 2);
    });
  
    it('TC05 - Checkout Process', () => {
      login(username, validPassword);
  
      // Add item to cart
      cy.get('[data-test^="add-to-cart"]').first().click();
  
      // Go to the shopping cart
      cy.get('.shopping_cart_link').click();
  
      // Click the "Checkout" button
      cy.get('[data-test="checkout"]').click();
  
      // Enter checkout information
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
  
      // Continue to the next step
      cy.get('[data-test="continue"]').click();
  
      // Finish the checkout process
      cy.get('[data-test="finish"]').click();
  
      // Verify order completion
      cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });
  });