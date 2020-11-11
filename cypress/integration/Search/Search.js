import { And, Given, When } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the homepage', () => {
    cy.visit('http://localhost:3000/test1');
});

When('I fill the search input with the {string} term', (term) => {
    const typedText = 'Gherkin with Cypress tests for React'
    cy.get('.input__test').type(term)
        .should('have.value', typedText)
});

And('I click on the submit button', () => {
    cy.get('.button__test').click()
})

Then('I should be redirected to a search page with the results of the {string} search', (term) => {
    cy.get('.content-box ').should('contain.text', term);
});



