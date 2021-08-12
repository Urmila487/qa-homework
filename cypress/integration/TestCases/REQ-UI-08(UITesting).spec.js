import ElementObjects from '../pageObjects/elementObjects'

describe('Click to UI Testing button navigate to the Home Page',function(){
    const elementObjects  = new ElementObjects()

    it('Click UI Testing button of Site 1',function(){
        cy.visit('http://172.19.192.1:8080/')
        elementObjects.uiTesting().contains('UI Testing').click()       // To click UI Testing button
        // After click UI Testing button "Home" Page should be display and Home text should be highlight
        elementObjects.homePageText().should('be.visible')
        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
    })

    it('Click UI Testing button of Site 2',function(){
        cy.visit('http://192.168.1.7:8080/')
        elementObjects.uiTesting().contains('UI Testing').click()       // To click UI Testing button
        // After click UI Testing button "Home" Page should be display and Home text should be highlight
        elementObjects.homePageText().should('be.visible')
        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)') 
    })

    it('Click UI Testing button of Site 3',function(){
        cy.visit('http://127.0.0.1:8080/')
        elementObjects.uiTesting().contains('UI Testing').click()       // To click UI Testing button
        // After click UI Testing button "Home" Page should be display and Home text should be highlight
        elementObjects.homePageText().should('be.visible')
        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
    })

})
