class logo{

    getLogo(){
        return cy.get('#if_logo')
    }
    captureLogo(){
        return cy.get('.img-responsive').toMatchImageSnapshot({
            imageConfig: {
              threshold: 0.001,    
            },
        })
    }
}

export default logo