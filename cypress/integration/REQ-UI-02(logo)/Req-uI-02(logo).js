import Logo from '../pageObjects/logo'

const logo = new Logo()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('Company Logo should be visible display', () => {
      cy.get('#if_logo').should('be.visible')
  })

    Then('Get Screenshot of company logo', () => {
      logo.getLogo()
  });


Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Company Logo should be visible display', () => {
      cy.get('#if_logo').should('be.visible')
  })

    Then('Get Screenshot of company logo', () => {
      logo.getLogo()
  });

Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('Company Logo should be visible display', () => {
      cy.get('#if_logo').should('be.visible')
  })

    Then('Get Screenshot of company logo', () => {
      logo.getLogo()
  });