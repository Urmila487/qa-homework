import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('Form button should be visible', () => {
      elementObjects.form().should('be.visible')  
  })

    And('I Click to Form button', () => {
      elementObjects.form().contains('Form').click()  
  })

    Then('Navigate to Form Page and Form Page display', () => {
      elementObjects.formPageText().should('be.visible') 
  });


Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Form button should be visible', () => {
      elementObjects.form().should('be.visible')  
  })

    And('I Click to Form button', () => {
      elementObjects.form().contains('Form').click()  
  })

    Then('Navigate to Form Page and Form Page display', () => {
      elementObjects.formPageText().should('be.visible') 
  });

Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('Form button should be visible', () => {
      elementObjects.form().should('be.visible')  
  })

    And('I Click to Form button', () => {
      elementObjects.form().contains('Form').click()  
  })

    Then('Navigate to Form Page and Form Page display', () => {
      elementObjects.formPageText().should('be.visible')  
  });