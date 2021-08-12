import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('Home button should be visible and Click on it', () => {
      elementObjects.home().should('be.visible').contains('Home').click()  
  })

    When('Home button active display validate to active status', () => {
      elementObjects.active().click({ force: true })  
  })

    Then('Home button text Highlight display', () => {
      elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });


Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Home button should be visible and Click on it', () => {
      elementObjects.home().should('be.visible').contains('Home').click()  
  })

    When('Home button active display validate to active status', () => {
      elementObjects.active().click({ force: true })  
  })

    Then('Home button text Highlight display', () => {
      elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });

Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('Home button should be visible and Click on it', () => {
      elementObjects.home().should('be.visible').contains('Home').click()  
  })

    When('Home button active display validate to active status', () => {
      elementObjects.active().click({ force: true })  
  })

    Then('Home button text Highlight display', () => {
      elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });