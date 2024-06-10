/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('opentab', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('/')
            cy.contains('Access all our Courses').click()

            cy.log(cy.title())
        })
        cy.log(cy.title())
        
    });
    
});