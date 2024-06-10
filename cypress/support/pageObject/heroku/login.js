/// <reference types="cypress" />
class Login_heroku{
    visiturl(){
        cy.visit('https://the-internet.herokuapp.com/login')
    }

    login(){
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.xpath("//i[@class='fa fa-2x fa-sign-in']").click();
    }

}

export default Login_heroku