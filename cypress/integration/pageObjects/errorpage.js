class errorpage{

    error(){
        return cy.get('#error')
    }

    errorPageText(){
        return cy.get('h1').contains('404 Error: File not found :-(')
    }
    

}

export default errorpage