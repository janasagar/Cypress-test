/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />
describe('double&right click', () => {
    it('test1', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick();
        
        
    });

it('double', () => {
    cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
    cy.xpath("//button").dblclick();

    
});    
    
});