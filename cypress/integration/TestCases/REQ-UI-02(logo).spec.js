import Logo from '../pageObjects/logo'
describe('Logo should be display in Everysite',function(){

    const logo  = new Logo()

    it('Site 1 Logo display ',function(){
        cy.visit('http://172.19.192.1:8080/')
        //To check Logo is display and Capture Snapshot
        cy.get('#if_logo').should('be.visible') 
        logo.getLogo()
        
    })


    it('Site 2 Logo display',function(){
        cy.visit('http://192.168.1.7:8080/')
        //To check Logo is display and Capture Snapshot 
        cy.get('#if_logo').should('be.visible') 
        logo.getLogo()
         
    })

    it('Site 3 Logo display',function(){

        cy.visit('http://127.0.0.1:8080/')
        //To check Logo is display and Capture Snapshot 
        cy.get('#if_logo').should('be.visible') 
        logo.getLogo()
    })

})