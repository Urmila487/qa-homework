class formpage{
    
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

    active(){
        return cy.get('.active')
    }

}

export default formpage