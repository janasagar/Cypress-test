///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('orangehrm', () => {
    it('login&logout test', () => {
        //first visit the web application
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //enter username and password
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        //clicking the Login button
        cy.get("[type='submit']").click()
        //go to the admin module
        cy.contains('Admin').click()
        //fillup the username, user role, employee name, status
        cy.get("[class='oxd-input oxd-input--active']:nth-child(1)").type('abcdy')//username
        //user role fiilup
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[1]/div[1]').click()
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]').click()
        //employee name fill up
        cy.get("[placeholder='Type for hints...']").type('ra')
        cy.wait(2000)//wait for 2 seconds for loding the auto complete
        cy.xpath("//div[@class='oxd-autocomplete-dropdown --positon-bottom']/div[1]").click()
        //Select the status
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div[1]/div[1]').click()
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div[2]/div[2]').click()
        //Search
        cy.contains('Search').click()//click on the search button
        cy.reload()//reload the page

        //there is no record of James Butler

        //logout of the application
        cy.get('.oxd-userdropdown-name').click()//click on top right corner account
        cy.xpath("//ul[@role='menu']/li[4]/a").click()//click on logout button





        
    });
    
});