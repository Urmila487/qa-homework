import ElementObjects from '../pageObjects/elementObjects'
describe('Home page -This site is dedicated to perform some exercises and demonstrate"',function(){
    const elementObjects  = new ElementObjects()
    
    it('Click Home button of Site 1',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageTextP()  // Check text This site is dedicated to perform some exercises and demonstrate
    })

    it('Click Home button of Site 2',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageTextP() // Check text This site is dedicated to perform some exercises and demonstrate

    })
    
    it('Click Home button of Site 3',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageTextP()// Check text This site is dedicated to perform some exercises and demonstrate
    })



})