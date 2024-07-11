describe('TodoList functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.log('Page visited');
  });

  it('Should add a new entry to the TodoList', () => {
    cy.get('input[name="time"]', { timeout: 10000 }).should('exist');
    cy.get('input[name="note"]').should('exist');
    
    // Your test steps to add a new entry
  });

  it('Should delete an entry from the TodoList', () => {
    cy.get('input[name="time"]', { timeout: 10000 }).type('10:00');
    cy.get('input[name="note"]').clear(); // Clear the note input field
    cy.get('button').contains('Submit').click();
    
    // Your test steps to delete an entry
  });
});
