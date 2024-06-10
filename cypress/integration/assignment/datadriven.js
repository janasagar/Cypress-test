///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('login test', () => {
    var testData;
    before('test data',()=>{
        cy.fixture('example.json').then((jsondata)=>{
            testData = jsondata;

        })

    })

    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type(testData.username)
        cy.get('#password').type(testData.password)
        cy.get('.fa').click();

        
    });
    
});