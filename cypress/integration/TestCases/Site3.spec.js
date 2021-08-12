import Homepage from '../pageObjects/homepage'
import Logo from '../pageObjects/logo'
import Formpage from '../pageObjects/formpage'
import Errorpage from '../pageObjects/errorpage'



describe('Site 3 ("http://127.0.0.1:8080") - All Test Cases',function(){

    const homepage  = new Homepage()
    const logo = new Logo()
    const formpage = new Formpage()
    const errorpage = new Errorpage()

    beforeEach(function(){
        cy.visit('http://127.0.0.1:8080')
    })

    it('The Title should be "UI Testing Site"',function(){
        homepage.getTitle().should('include','UI Testing Site')  //UI testing site tite contains     
    })

    it('The Company Logo should be visible ',function(){
        logo.getLogo().should('be.visible') //To check Logo is display and Capture Snapshot
        logo.captureLogo()    
    })

    it('Click on Home button that should be navigate to Home page  ',function(){
        homepage.home().should('be.visible')           //Home button should be visible
        homepage.home().contains('Home').click()       // To click Home button
    })

    it('Click on Home button it should turn active status',function(){
        homepage.home().contains('Home').click()
        // active class validate display
        homepage.active().click({ force: true })  
        // After click Home button "Home" text color should be white
        homepage.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')      
    })

    it('Click on Form button that should be navigate to Form Page ',function(){
        formpage.form().contains('Form').click()       // To click Form button
    })

    it('Click on Form button of it should turn active status',function(){
        formpage.form().contains('Form').click()
        // active class validate display
        formpage.active().click({ force: true }) 
        // After click Form button "Form" text color should be white
        formpage.form().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')      
    })

    it('Click on Error button, Http code 404 should be display',function(){
        errorpage.error().contains('Error').click()       // To click Error button
        errorpage.errorPageText()  //Validate 404 Error text contains  
    })

    it('Click on UI Testing button , thats navigate to Home Page',function(){
        homepage.uiTesting().contains('UI Testing').click()       // To click UI Testing button
        // After click UI Testing button "Home" Page should be display and Home text should be highlight
        homepage.homePageText().should('be.visible')
        homepage.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
    })

    it('Click on Home button,in Home Page h1 tag "Welcome to Pixelmatic QA department" text should be display',function(){
        homepage.home().contains('Home').click()       // To click Home button
        homepage.homePageText()  // Check Welcome to Pixelmatic QA department text display
    })

    it('Click on Home button, in Home Page p tag "This site is dedicated to perform..text display" ',function(){
        homepage.home().contains('Home').click()       // To click Home button
        homepage.homePageTextP()  // Check text This site is dedicated to perform some exercises and demonstrate
    })

    it('Form Page input box and submit button should display',function(){
        formpage.form().contains('Form').click()       // To click Form button
        formpage.formPageText()  // To check Simple Form submission text display
        formpage.forminput().should('be.visible').should('be.enabled') //To check input box visible and enable
        formpage.formsubmit().should('be.visible').should('be.enabled') //To check Submit button visible and enable
    })

    it('In Form Page after Enter Value in input box and submit, Hello Page should be display',function(){
        formpage.form().contains('Form').click()       // To click Form button
        formpage.formPageText()  // To check Simple Form submission text display
        formpage.forminput().should('be.visible').should('be.enabled').type('John') //To check input box visible and enable
        formpage.formsubmit().should('be.visible').should('be.enabled').click() //To check Submit button visible and enable
        formpage.helloPagetext().contains('Hello John!')
        cy.go(-1)
        formpage.forminput().clear().type('Sophia')
        formpage.formsubmit().click()
        formpage.helloPagetext().contains('Hello Sophia!')
        cy.go(-1)
        formpage.forminput().clear().type('Charlie')
        formpage.formsubmit().click()
        formpage.helloPagetext().contains('Hello Charlie!')
        cy.go(-1)
        formpage.forminput().clear().type('Emily')
        formpage.formsubmit().click()
        formpage.helloPagetext().contains('Hello Emily!')

    })

})