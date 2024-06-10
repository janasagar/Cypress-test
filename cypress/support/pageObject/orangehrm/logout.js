/// <reference types="cypress" />
class Logout_orangehrm{
    

    logout(){
        cy.get('.oxd-userdropdown-name').click()
        cy.xpath("//ul[@role='menu']/li[4]/a").click()
    }

}

export default Logout_orangehrm