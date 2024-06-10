// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import DatePickerPage from "./pageObject/DatePickerPage";
import DateUtils from "./dateUtils/DateUtils";
var datepickerpage = new DatePickerPage();
var dateutils = new DateUtils();
Cypress.Commands.add('selectYear', (yearName) => {
    const currentYear = new Date().getFullYear()
    datepickerpage.getYear().then(($year) => {
        if($year.text()==yearName){
            cy.log(yearName+'year is selectd')
            return
        } else{
            if(yearName>currentYear){
                datepickerpage.getNavigateForward().click()
            }
            else if (yearName<currentYear){
                datepickerpage.getNavigateBack().click()
            }

        }
        cy.selectYear(yearName)
    })
})    

Cypress.Commands.add('selectMonth',(monthName)=>{
    let currentmonth = new Date().getMonth()+1
    let givenmonth = dateutils.getMonthIndexfromName(monthName)

    datepickerpage.getMonth().then(($month)=>{
        if($month.text().includes(monthName)){
            cy.log(monthName+'month is selected')
            return
        }
        else{
            if(givenmonth>currentmonth){
                datepickerpage.getNavigateForward().click()
            }
            else if(givenmonth<currentmonth){
                datepickerpage.getNavigateBack().click()
            }
        }
        cy.selectMonth(monthName)
    })
})  

Cypress.Commands.add('selectDay',(dayName)=>{
    datepickerpage.getDay().eq(dayName=16).click()
    cy.log(dayName+'day is selected')
})

