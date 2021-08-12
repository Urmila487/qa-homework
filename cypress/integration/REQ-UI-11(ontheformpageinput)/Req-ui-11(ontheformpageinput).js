import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('Form button should be visible and Click on it', () => {
      elementObjects.form().should('be.visible').contains('Form').click()  
  })

    When('Form Page Simple Form Submission text display', () => {
      elementObjects.formPageText().should('be.visible')  
  })

    And('Form Page one Input box Enable and Visible display', () => {
      elementObjects.forminput().should('be.visible').should('be.enabled')  
  })

    Then('Form Page one Submit button Enable and Visible display', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled') 
  });



Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Form button should be visible and Click on it', () => {
      elementObjects.form().should('be.visible').contains('Form').click()  
  })

    When('Form Page Simple Form Submission text display', () => {
      elementObjects.formPageText().should('be.visible')  
  })

    And('Form Page one Input box Enable and Visible display', () => {
      elementObjects.forminput().should('be.visible').should('be.enabled')  
  })

    Then('Form Page one Submit button Enable and Visible display', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled') 
  });


Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('Form button should be visible and Click on it', () => {
      elementObjects.form().should('be.visible').contains('Form').click()  
  })

    When('Form Page Simple Form Submission text display', () => {
      elementObjects.formPageText().should('be.visible')  
  })

    And('Form Page one Input box Enable and Visible display', () => {
      elementObjects.forminput().should('be.visible').should('be.enabled')  
  })

    Then('Form Page one Submit button Enable and Visible display', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled') 
  });