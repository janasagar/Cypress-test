/// <reference types="@cypress/xpath" />
/// <reference types="cypress" />

describe('drag', () => {
    it('test1', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        
    });
    
});