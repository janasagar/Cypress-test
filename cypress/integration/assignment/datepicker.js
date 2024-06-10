///<reference types="cypress-iframe" />
/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

import DatePickerPage from "../../support/pageObject/DatePickerPage";




describe('date picker1 testing', () => {
    var datepickerpage = new DatePickerPage();
    it('test1',() => {
        cy.once('uncaught:exception', () => false);
  
        cy.get('body').click();
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        datepickerpage.getDatePickerPage().click()
        datepickerpage.getCalender().should('be.visible')
        cy.selectYear('2022')
        cy.selectMonth('May')
        cy.selectDay('17')

        
    });

    // it('select date', () =>  {

    //     cy.selectYear(1979)
    //     cy.selectMonth('August')
    //     cy.selectDay(17)
        
    // });
    
});