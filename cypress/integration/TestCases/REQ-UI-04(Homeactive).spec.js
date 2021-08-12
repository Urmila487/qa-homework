import ElementObjects from '../pageObjects/elementObjects'

describe('Click to Home button It should turn to active status',function(){
    
    const elementObjects  = new ElementObjects()

    it('Click Home button of Site 1 for active status',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.home().contains('Home').click()

        // active class validate display
        elementObjects.active().click({ force: true })
        
        // After click Home button "Home" text color should be white
        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')      
    
    })

    it('Click Home button of Site 2 for active status',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.home().contains('Home').click()

        // active class validate display
        elementObjects.active().click({ force: true })   

        // After click Home button "Home" text color should be white

        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
         
    })

    it('Click Home button of Site 3 for active status',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.home().contains('Home').click()

        
        // Active status display
        elementObjects.active().click({ force: true })   

        // After click Home button "Home" text color should be white
        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
         
    })

})