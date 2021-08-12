import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('Error button should be visible', () => {
      elementObjects.error().should('be.visible')  
  })

    And('I Click to Error button', () => {
      elementObjects.error().contains('Error').click()  
  })

    Then('Navigate to Error Page and get a 404 HTTP response code', () => {
      elementObjects.errorPageText().should('be.visible') 
  });



Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Error button should be visible', () => {
      elementObjects.error().should('be.visible')  
  })

    And('I Click to Error button', () => {
      elementObjects.error().contains('Form').click()  
  })

    Then('Navigate to Error Page and get a 404 HTTP response code', () => {
      elementObjects.errorPageText().should('be.visible') 
  });


 
Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('Error button should be visible', () => {
      elementObjects.error().should('be.visible')  
  })

    And('I Click to Error button', () => {
      elementObjects.error().contains('Form').click()  
  })

    Then('Navigate to Error Page and get a 404 HTTP response code', () => {
      elementObjects.errorPageText().should('be.visible')  
  });