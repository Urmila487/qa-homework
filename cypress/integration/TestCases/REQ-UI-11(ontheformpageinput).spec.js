/// <reference types="cypress" />
import ElementObjects from '../pageObjects/elementObjects'

describe('Form Page -input box and submit button display',function(){
    const elementObjects  = new ElementObjects()

    it('Form Page input box and submit button of Site 1',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.form().contains('Form').click()       // To click Form button
        elementObjects.formPageText()  // To check Simple Form submission text display
        elementObjects.forminput().should('be.visible').should('be.enabled') //To check input box visible and enable
        elementObjects.formsubmit().should('be.visible').should('be.enabled') //To check Submit button visible and enable
    })

    it('Form Page input box and submit button of Site 2',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.form().contains('Form').click()       // To click Form button
        elementObjects.formPageText()  // To check Simple Form submission text display
        elementObjects.forminput().should('be.visible').should('be.enabled') //To check input box visible and enable
        elementObjects.formsubmit().should('be.visible').should('be.enabled') //To check Submit button visible and enable
         
    })

    it('Form Page input box and submit button of Site 3',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.form().contains('Form').click()       // To click Form button
        elementObjects.formPageText()  // To check Simple Form submission text display
        elementObjects.forminput().should('be.visible').should('be.enabled') //To check input box visible and enable
        elementObjects.formsubmit().should('be.visible').should('be.enabled') //To check Submit button visible and enable
         
    })

})