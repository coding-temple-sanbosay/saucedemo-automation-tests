describe('SauceDemo - Login Tests', () => {
  beforeEach(() => {
    // Intercept and stub requests to problematic third-party scripts
    cy.intercept('POST', 'https://events.backtrace.io/**', (req) => {
      req.reply({
        statusCode: 200,
        body: {},
      });
    }).as('backtraceEvents');

    cy.visit('https://www.saucedemo.com/');
  });

  it('TC01 - Valid Login', () => {
    // Type username and password
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    
    // Click Login
    cy.get('[data-test="login-button"]').click();
    
    // Check if we are on the products page
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('TC02 - Invalid Login', () => {
    // Type username and invalid password
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    
    // Click Login
    cy.get('[data-test="login-button"]').click();
    
    // Check for error message
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service.');
  });
});