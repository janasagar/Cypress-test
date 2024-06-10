/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />
// mngr575500 heqesyj
describe('mousehover', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show')
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force:true});
        cy.url().should('include','top')
        
    });
    
});