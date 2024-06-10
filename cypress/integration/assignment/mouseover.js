///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('mouseover', () => {
    it('test1', () => {
        cy.visit('https://www.ebay.com/')
        cy.get('[data-currenttabindex="0"] > [href="https://www.ebay.com/b/Electronics/bn_7000259124"]').trigger('mouseover')
        cy.contains('Apple').click();
        
    });
    
});