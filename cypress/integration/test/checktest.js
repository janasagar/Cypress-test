/// <reference types="@cypress/xpath" />
describe('test suit', () => {
    it('test on checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('have.value', 'option1').and('have.attr','name','checkBoxOption1').should('be.checked')
        cy.get('#checkBoxOption2').check().should('have.value', 'option2').and('have.attr','name','checkBoxOption2').should('be.checked')
        cy.get('#checkBoxOption3').check().should('have.value', 'option3').and('have.attr','name','checkBoxOption3').should('be.checked')

    });

it.skip('multiple checkbox', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get("input[type='checkbox']").check(['option1','option2','option3']).should('be.checked')
    cy.get("input[type='checkbox']").uncheck(['option3']).should('not.be.checked')

    
});

it.skip('radio button', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("[name='radioButton']").check('radio1').should('be.checked')
    cy.get("[for='radio2'] > [value='radio2']").check().should('have.value', 'radio2')
    
    
});

it.skip('dropdown', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // cy.get("[name='dropdown-class-example']").select(1)
    cy.get("[name='dropdown-class-example']").select('Option1').should('have.value','option1')
    cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
    cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
    
});

it('select by index', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("[name='dropdown-class-example']").select(1).should('have.value','option1')
    cy.get("[name='dropdown-class-example']").select(2).should('have.value','option2')
    cy.get("[name='dropdown-class-example']").select(3).should('have.value','option3')
    cy.get("[name='dropdown-class-example']").select(0).should('have.value','')
    
});

it('select by text', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("[name='dropdown-class-example']").select('Select').should('have.value','')
    cy.get("[name='dropdown-class-example']").select('option1').should('have.value','option1')
    cy.get("[name='dropdown-class-example']").select('option2').should('have.value','option2')
    cy.get("[name='dropdown-class-example']").select('option3').should('have.value','option3')
    
});

it('Dynamic deopdown', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('.ui-autocomplete-input').type('us')
    cy.xpath("//div[.='Cyprus' and @class='ui-menu-item-wrapper']").click();
    // cy.get('.ui-menu-item').each(($el,index,$kist)=>{
    //     if($el.text()=='Japan'){
    //         cy.wrap($el).click();

    //     }
    // })
});

    
});