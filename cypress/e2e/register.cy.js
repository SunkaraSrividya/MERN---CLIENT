describe('Register page E2E testing', () => {
    it('Testing Register page functionality', () => {
        // Intercept the POST request to /register
        cy.intercept('POST', 'http://localhost:3000/register', {
            statusCode: 200,
            body: 'User register Successfully',
        }).as('registerUser');
        
        // Visit the register page
        cy.visit('/register');
        
        // Check the header text
        cy.get('h1').should('contain', 'Register Here');
        
        // Fill out the registration form
        cy.get('input[name="name"]').type('Jackie Jhon');
        cy.get('input[name="email"]').type('JackieJhon@gmail.com');
        cy.get('input[name="password"]').type('JackieJhon123');
        
        // Submit the form
        cy.get('button[type="submit"]').click();
        
 
        
        // Verify the success message is displayed
        cy.contains('User register Successfully').should('be.visible');
        
        // Log success
        cy.log('Register functionality is working');
    });
});
