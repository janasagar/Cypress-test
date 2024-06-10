////table[@class='table-display']/tbody/tr[7]/td[3]
////div[@class='tableFixHead']/table/tbody/tr[3]/td[4]
////div[@class='tableFixHead']/table/tbody/tr[8]/td[4]
/// <reference types="@cypress/xpath" />
describe('webtables', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//table[@class='table-display']/tbody/tr[7]/td[3]").should('include.text','35')
        cy.xpath("//table[@class='table-display']/tbody/tr[5]/td[2]").should('include.text','WebSecurity Testing for Beginners-QA knowledge to next level')
        cy.xpath("//table[@class='table-display']/tbody/tr[7]/td[1]").should('include.text','Rahul Shetty')
        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[3]/td[4]").should('include.text','48')
        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[3]/td[1]").should('include.text','Dwayne')
    });

it('test2', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.xpath("//table[@class='table-display']/tbody/tr[9]/td").each(($el,index,$list)=>{
        let text1 =$el.text()
        if(text1.includes('Python')){

            cy.wrap($el).next().then((price)=>{
                cy.log(price.text())
            })

        }
    })

    
});    
    
});