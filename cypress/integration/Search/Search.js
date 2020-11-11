import { And, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Jestem na stronie testu: endpoint /test1', () => {
    cy.visit('http://localhost:3000/test1');

});

When('Kiedy wpisuję frazę {string} w polu tekstowym', (term) => {
    const typedText = 'Gherkin i Cypress w React'
    cy.get('.input__test').type(term)
        .should('have.value', typedText)
});

And('i klikam na przycisk Test button', () => {
    cy.get('.button__test').click()
})

Then('wtedy poniżej przycisku jest wypisywany tekst: {string}', (term) => {
    cy.get('.content-box ').should('contain.text', term);
});



// Feature: Search functionality
// Scenario: Using the search input
// Given I am on the homepage
// When I fill the search input with the "Gherkin with Cypress tests for React" term
// And I click on the submit button
// Then I should be redirected to a search page with the results of the "Gherkin with Cypress tests for React" search



