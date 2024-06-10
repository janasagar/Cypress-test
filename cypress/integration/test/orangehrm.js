/// <reference types="@cypress/xpath" />
describe('test suit', () => {
    it('orangehrm testing', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get('.orangehrm-login-button').click();
        cy.contains('Admin').click();
        cy.url().should('include','admin')
        cy.go('back')
        cy.url().should('include','dashboard')
        cy.go('forward')
        cy.url().should('include','admin')
        cy.reload()
        
        
        // cy.xpath('//li[1]//a[1]//span[1]').click();


        
    });


    

    
});