/// <reference types="cypress" />
import Login_orangehrm from "../../support/pageObject/orangehrm/login";
import Visit_Page from "../../support/pageObject/orangehrm/visitpage";
import Logout_orangehrm from "../../support/pageObject/orangehrm/logout";
describe('orangehrm', () => {
    var loginhrm = new Login_orangehrm();
    var visiturl = new Visit_Page();
    var logouthrm = new Logout_orangehrm();
    it('test1', () => {
        loginhrm.visiturl();
        loginhrm.login();
        visiturl.page_hrm('Admin')
        logouthrm.logout()


        
    });
    
});