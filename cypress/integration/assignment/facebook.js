///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />
//73bc7cf83b5a479cb68fbad67dd8e2db

describe('Facebook signup', () => {
    it('signup test', () => {
        cy.once('uncaught:exception', () => false);
  
        cy.get('body').click();
        cy.visit('https://en-gb.facebook.com/');
        // cy.get("[data-testid='open-registration-form-button']").click();
        cy.contains('Sign Up').click();
        cy.xpath("//input[@name='firstname']").type('Sagar')
        cy.xpath("//input[@name='lastname']").type('Jana')
        cy.get('#day').select('17');
        cy.get('#month').select('May')
        cy.get('#year').select('1997')
        cy.xpath("//input[@value='2']").check('2').should('be.checked')


        cy.get("[name='reg_email__']").type('7098510151')
        cy.get("[name='reg_passwd__']").type('Password')
        cy.xpath("//button[@name='websubmit']").click()
        
        
    });
    
});