import ElementObjects from '../pageObjects/elementObjects'

describe('Home page "Welcome to Pixelmatic QA department" text should be display',function(){
    const elementObjects  = new ElementObjects()

    it('Click Home button of Site 1',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageText()  // Check Welcome to Pixelmatic QA department text display
    })

    it('Click Home button of Site 2',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageText()  // Check Welcome to Pixelmatic QA department text display
    })

    it('Click Home button of Site 3',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageText()   // Check Welcome to Pixelmatic QA department text display
    })

})
