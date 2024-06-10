class Visit_Page{
    page_hrm(link){
        cy.contains(link).click()
    }
}
export default Visit_Page