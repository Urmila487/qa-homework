import ElementObjects from '../pageObjects/elementObjects'
import Logo from '../pageObjects/logo'

describe('Site 1 ("http://172.19.192.1:8080/") - All Test Cases',function(){

    const elementObjects  = new ElementObjects()
    const logo  = new Logo()

    beforeEach(function(){
        cy.visit('http://172.19.192.1:8080/')
    })

    it('The Title should be "UI Testing Site"',function(){
        elementObjects.getTitle().should('include','UI Testing Site')  //UI testing site tite contains     
    })

    it('The Company Logo should be visible ',function(){
        logo.getLogo().should('be.visible') //To check Logo is display and Capture Snapshot
        logo.captureLogo()    
    })

    it('Click on Home button that should be navigate to Home page  ',function(){
        elementObjects.home().should('be.visible')           //Home button should be visible
        elementObjects.home().contains('Home').click()       // To click Home button
    })

    it('Click on Home button it should turn active status',function(){
        elementObjects.home().contains('Home').click()
        // active class validate display
        elementObjects.active().click({ force: true })  
        // After click Home button "Home" text color should be white
        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')      
    })

    it('Click on Form button that should be navigate to Form Page ',function(){
        elementObjects.form().contains('Form').click()       // To click Form button
    })

    it('Click on Form button of it should turn active status',function(){
        elementObjects.form().contains('Form').click()
        // active class validate display
        elementObjects.active().click({ force: true }) 
        // After click Form button "Form" text color should be white
        elementObjects.form().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')      
    })

    it('Click on Error button, Http code 404 should be display',function(){
        elementObjects.error().contains('Error').click()       // To click Error button
        elementObjects.errorPageText()  //Validate 404 Error text contains  
    })

    it('Click on UI Testing button , thats navigate to Home Page',function(){
        elementObjects.uiTesting().contains('UI Testing').click()       // To click UI Testing button
        // After click UI Testing button "Home" Page should be display and Home text should be highlight
        elementObjects.homePageText().should('be.visible')
        elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
    })

    it('Click on Home button,in Home Page h1 tag "Welcome to Pixelmatic QA department" text should be display',function(){
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageText()  // Check Welcome to Pixelmatic QA department text display
    })

    it('Click on Home button, in Home Page p tag "This site is dedicated to perform..text display" ',function(){
        elementObjects.home().contains('Home').click()       // To click Home button
        elementObjects.homePageTextP()  // Check text This site is dedicated to perform some exercises and demonstrate
    })

    it('Form Page input box and submit button should display',function(){
        elementObjects.form().contains('Form').click()       // To click Form button
        elementObjects.formPageText()  // To check Simple Form submission text display
        elementObjects.forminput().should('be.visible').should('be.enabled') //To check input box visible and enable
        elementObjects.formsubmit().should('be.visible').should('be.enabled') //To check Submit button visible and enable
    })

    it('In Form Page after Enter Value in input box and submit, Hello Page should be display',function(){
        elementObjects.form().contains('Form').click()       // To click Form button
        elementObjects.formPageText()  // To check Simple Form submission text display
        elementObjects.forminput().should('be.visible').should('be.enabled').type('John') //To check input box visible and enable
        elementObjects.formsubmit().should('be.visible').should('be.enabled').click() //To check Submit button visible and enable
        elementObjects.helloPagetext().contains('Hello John!')
        cy.go(-1)
        elementObjects.forminput().clear().type('Sophia')
        elementObjects.formsubmit().click()
        elementObjects.helloPagetext().contains('Hello Sophia!')
        cy.go(-1)
        elementObjects.forminput().clear().type('Charlie')
        elementObjects.formsubmit().click()
        elementObjects.helloPagetext().contains('Hello Charlie!')
        cy.go(-1)
        elementObjects.forminput().clear().type('Emily')
        elementObjects.formsubmit().click()
        elementObjects.helloPagetext().contains('Hello Emily!')

    })






})