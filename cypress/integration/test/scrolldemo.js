/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />
//rrrrrrr0007
describe('Google scrool', () => {
    it('test1', () => {
        cy.visit('https://www.google.com/')
        cy.xpath("//textarea[@title='Search']").type('Masai{enter}')
        cy.wait(2000);
        cy.scrollTo(0,2000)
        cy.wait(2000)
        cy.scrollTo(0,-200)
        cy.contains('Maasai people').scrollIntoView().click()
        cy.wait(2000)

        
    });
    
});