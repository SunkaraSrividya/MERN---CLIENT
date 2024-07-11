describe('home page test',()=>{
    it('check the input field',()=>{
        cy.visit('/');
            cy.get('input').type('cinderella')
        
            cy.get('button').should('be.visible')
        cy.get('button').click()
        cy.contains('welcome,cinderella')
        cy.get('input').should('have.value','cinderella')
    })
})