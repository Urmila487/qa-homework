class elementObjects{
    getTitle(){
        return cy.title()
    }

    home(){
        return cy.get('#home')
    }

    homePageText(){
        return cy.get('h1').contains('Welcome to Pixelmatic QA department')
    }

    homePageTextP(){
        return cy.get('p').contains('This site is dedicated to perform some exercises and demonstrate automated web testing.')
    }

    active(){
        return cy.get('.active')
    }

    form(){
        return cy.get('#form')
    }

    formPageText(){
        return cy.get('h1').contains('Simple Form Submission')
    }

    forminput(){
        return cy.get('#hello-input')
    }

    formsubmit(){
        return cy.get('#hello-submit')
    }

    helloPagetext(){
        return cy.get('#hello-text')
    }

    error(){
        return cy.get('#error')
    }

    errorPageText(){
        return cy.get('h1').contains('404 Error: File not found :-(')
    }
    
    uiTesting(){
        return cy.get('#site')
    }


}

export default elementObjects