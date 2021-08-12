import ElementObjects from '../pageObjects/elementObjects'

describe('Click to Form button that should be navigate to Form page',function(){
    const elementObjects  = new ElementObjects()

    it('Click Form button of Site 1',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.form().contains('Form').click()       // To click Form button
    })

    it('Click Form button of Site 2',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.form().contains('Form').click()       // To click Form button
         
    })

    it('Click Form button of Site 3',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.form().contains('Form').click()       // To click Form button
         
    })

})