/// <reference types="@cypress/xpath" />
describe('test suit', () => {
    it('first test case', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath("//a[contains(text(),'Contact Us')]").click();
        cy.get('#ContactUsFrm_first_name').type('Sagar');
        cy.get('#ContactUsFrm_email').type('sagarjana@gmail.com');
        cy.get('#ContactUsFrm_enquiry').type('check for products')
        cy.contains('Submit').click();
        cy.xpath("//*[contains(text(),'successfully')]").should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        




    });
    
});