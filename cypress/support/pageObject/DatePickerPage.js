class DatePickerPage{

    getDatePickerPage(){
        return cy.get('input#datepicker1')
    }

    getCalender(){
        return cy.get('div#ui-datepicker-div')
    }

    getNavigateBack(){
        return cy.get('a.ui-datepicker-prev')


    }
     getNavigateForward(){
        return cy.get('a.ui-datepicker-next')

     }

     getMonth(){
        return cy.get('div.ui-datepicker-title span:nth-child(1)')
        

     }

     getDay(){
        return cy.get('table.ui-datepicker-calendar a.ui-state-default')


     }
     getYear(){
        return cy.get('span.ui-datepicker-year')

     }
}

export default DatePickerPage