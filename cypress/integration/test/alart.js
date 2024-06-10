/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('test', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on("window:alert",(msg)=>{
            expect(msg).to.eq('Hello , share this practice page and share your knowledge')
            return true;
        })

        cy.get('#confirmbtn').click();
        cy.on("window:confirm",(msg1)=>{
            expect(msg1).to.eq('Hello , Are you sure you want to confirm?')
            // expect(msg1).to.eq('Hello , Are you sure you want to confirm?')
            return false;
        })
        
    });
    
});