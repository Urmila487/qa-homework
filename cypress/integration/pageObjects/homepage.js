class homepage{
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

    uiTesting(){
        return cy.get('#site')
    }


}

export default homepage