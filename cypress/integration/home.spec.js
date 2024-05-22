// cypress/integration/home.spec.js

describe('Home Page', () => {
    it('should display the hero section', () => {
      cy.visit('/'); // Visit the home page
      cy.get('.relative').should('exist'); // Check if the hero section exists
      cy.contains('COMPUTER ENGINEERING DEPARTMENT').should('be.visible'); // Check if the title is visible
    });
  
    it('should display the welcome message', () => {
      cy.visit('/'); // Visit the home page
      cy.contains('WELCOME TO COMPUTER ENGINEERING DEPARTMENT').should('be.visible'); // Check if the welcome message is visible
    });
  
    it('should display the logos', () => {
      cy.visit('/'); // Visit the home page
      cy.get('img[alt="TIP Logo"]').should('be.visible'); // Check if the TIP logo is visible
      cy.get('img[alt="CPE Logo"]').should('be.visible'); // Check if the CPE logo is visible
      cy.get('img[alt="SSC Logo"]').should('be.visible'); // Check if the SSC logo is visible
    });
  });
  