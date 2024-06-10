/// <reference types="cypress" />
import Login_heroku from "../../support/pageObject/heroku/login";
describe('heroku', () => {
    var login_heroku= new Login_heroku();
    it('login', () => {
        login_heroku.visiturl();
        login_heroku.login();

        
    });
    
});