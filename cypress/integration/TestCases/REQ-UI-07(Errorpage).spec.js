import ElementObjects from '../pageObjects/elementObjects'

describe('Click to Error button that should be get 404 HTTP response code',function(){
    const elementObjects  = new ElementObjects()

    it('Click Error button of Site 1',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.error().contains('Error').click()       // To click Error button
        elementObjects.errorPageText()  //Validate 404 Error text contains  
    })

    it('Click Error button of Site 2',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.error().contains('Error').click()       // To click Error button
        elementObjects.errorPageText()  //Validate 404 Error text contains  
    })

    it('Click Error button of Site 3',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.error().contains('Error').click()       // To click Error button
        elementObjects.errorPageText()  //Validate 404 Error text contains  
    })

})