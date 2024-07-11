describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('http://localhost:3000/')
        //visit function , visit to visit the url
        cy.contains('Welcome')
        cy.contains('Register')
        cy.contains('Login')
        cy.contains('logout')
        //if a test is present in the doc
    })
})