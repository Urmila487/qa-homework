import ElementObjects from '../pageObjects/elementObjects'

describe('Title should be "UI Testing Site"',function(){

    const elementObjects  = new ElementObjects()

    it('"UI Testing Site 1" title',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.getTitle().should('include','UI Testing Site')  //UI testing site tite contains
         
    })

    it('"UI Testing Site 2" title',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.getTitle().should('include','UI Testing Site')  //UI testing site tite contains
         
    })

    it('"UI Testing Site 3" title',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.getTitle().should('include','UI Testing Site')  //UI testing site tite contains
         
    })
})