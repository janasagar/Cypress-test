/// <reference types="@cypress/xpath" />

describe('test suit', () => {
    it('first test case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath("//input[@placeholder='Username']").type('Admin')
        cy.xpath("//input[@placeholder='Password']").type('admin123')
        // cy.get("input[name='username']").type('Admin');
        // cy.get("input[name='password']").type('admin123');
        cy.get(".orangehrm-login-button").click();
        // cy.contains('Login').click();
        cy.wait(2000)
        
    });
});