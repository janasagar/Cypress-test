///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('heroku tab switch', () => {
    it('test', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        
            cy.contains('Elemental Selenium').click();
            cy.origin('https://elementalselenium.com/',()=>{
                cy.visit('/')
                cy.get('#email').type("sagarjana3@gmail.com")
                cy.get('#options').select('java')
                cy.contains('Send me test automation Pro tips').click()
                cy.url().should('include','thanks')
    
    
                cy.go('back')
                cy.go('back')
                
                
            })
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.xpath("//i[@class='fa fa-2x fa-sign-in']").click();
        
        
        
    });
    
});