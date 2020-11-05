describe('div test', () => {


    it('visit react app host', () => {
        cy.visit('http://localhost:3000/')
        cy.get('div').should('have.class', 'wrapperex')
    })


})