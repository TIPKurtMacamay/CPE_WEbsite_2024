describe('Navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Adjust the URL if needed
    });
  
    it('should render the navbar with all links', () => {
      cy.get('nav').should('be.visible');
      cy.get('nav').contains('Home').should('have.attr', 'href', '/');
      cy.get('nav').contains('About').should('have.attr', 'href', '/about');
      cy.get('nav').contains('Faculty & Staff').should('have.attr', 'href', '/faculty');
      // Add other links as needed
    });
  
    it('should navigate to the About page', () => {
      cy.get('nav').contains('About').click();
      cy.url().should('include', '/about');
      cy.get('h1').should('contain', 'About'); // Assuming there's an h1 with text 'About' on the About page
    });
  });
  