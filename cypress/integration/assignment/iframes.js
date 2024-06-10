///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('iframe test', () => {
    it('test1', () => {
        // cy.once('unrecognized expression', () => false);
  
        // cy.get('body').click();
        cy.visit('https://v1.training-support.net/selenium/iframes');
        cy.frameLoaded(":nth-child(2) > iframe");
        cy.iframe().get('.ui inverted green button').click()
        
    });
    
});