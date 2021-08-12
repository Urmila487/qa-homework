import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('Home button should be visible', () => {
      elementObjects.home().should('be.visible')  
  })

    Then('Validate p tag and This site is dedicated to perform text visible', () => {
      elementObjects.homePageTextP().should('be.visible') 
  });


Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Home button should be visible', () => {
      elementObjects.home().should('be.visible')  
  })

    Then('Validate p tag and This site is dedicated to perform text visible', () => {
      elementObjects.homePageTextP().should('be.visible') 
  });

Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('Home button should be visible', () => {
      elementObjects.home().should('be.visible')  
  })

    Then('Validate p tag and This site is dedicated to perform text visible', () => {
      elementObjects.homePageTextP().should('be.visible')  
  });