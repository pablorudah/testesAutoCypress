
Cypress._.times(3, function() {
    it('', function() {
        cy.visit('./src/privacy.html')
    
        cy.contains('Talking About Testing').should('be.visible')
    })
})

