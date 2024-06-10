/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

import {Before,Given,When,And,Then} from  "cypress-cucumber-preprocessor/steps"

Given('Open the browser and Enter the Simple form URL',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')
})
And('User enters First Name, Last Name, Email, Contact Number',()=>{
    cy.xpath("//input[@placeholder='First Name']").type('Sagar')
    cy.xpath("//input[@placeholder='Last Name']").type('Jana')
    cy.get('#email').type('test@gmail.com')
    cy.get('#number').type('7098510151')
})
And('Click the Submit button',()=>{
    cy.xpath("//input[@value='submit']").click()

})
Then('An alert message display',()=>{
    cy.on("window:alert",(msg)=>{
        expect(msg).to.eq('Thank You for reaching out to us, Sagar Jana')
        return true;
    })

})