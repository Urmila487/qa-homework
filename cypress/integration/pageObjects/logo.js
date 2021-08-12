class logo{
    getLogo(){
        return cy.get('.img-responsive').toMatchImageSnapshot({
            imageConfig: {
              threshold: 0.001,    
            },
        })
    }
}

export default logo