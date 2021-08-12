import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('I validate Title of UI Testing', () => {
      elementObjects.getTitle().should('eq', 'UI Testing Site')
  })

    Then('UI Testing Site title should be Validate', () => {
      elementObjects.getTitle().should('include','UI Testing Site')
  });


Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('I validate Title of UI Testing', () => {
      elementObjects.getTitle().should('eq', 'UI Testing Site')
  })

    Then('UI Testing Site title should be Validate', () => {
      elementObjects.getTitle().should('include','UI Testing Site')
  });

Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('I validate Title of UI Testing', () => {
      elementObjects.getTitle().should('eq', 'UI Testing Site')
  })

    Then('UI Testing Site title should be Validate', () => {
      elementObjects.getTitle().should('include','UI Testing Site')
  });