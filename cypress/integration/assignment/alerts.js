///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

const { expect } = require("chai");

describe('alert test', () => {
    it('test 1', () => {
        cy.visit('https://v1.training-support.net/selenium/javascript-alerts')
        cy.get('#simple').click();
        cy.on("window:alert",(msg)=>{
            expect(msg).to.eq('This is a JavaScript Alert!')
            return false;
        })
        cy.get('#confirm').click();
        cy.on('window:confirm',(msg1)=>{
            expect(msg1).to.eq('This is a JavaScript Confirmation!')
            return false;
        })
        
    });

it('prompt test', () => {
    cy.visit('https://v1.training-support.net/selenium/javascript-alerts')
    cy.window().then(win =>{
        cy.stub(win, 'prompt').returns('Sagar');
        cy.get('#prompt').click();
    })

    
});    
    
});