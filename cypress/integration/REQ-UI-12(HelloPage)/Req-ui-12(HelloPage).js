import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('Form button should be visible and Click on it', () => {
      elementObjects.form().should('be.visible').contains('Form').click()  
  })

    When('Form button Simple Form Submission text display', () => {
        elementObjects.formPageText()  
  })

    When('Enter "John" in input box', () => {
      elementObjects.forminput().should('be.visible').should('be.enabled').type('John')  
  })

    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click()  
  })

    Then('Hello Page "Hello John!" text display', () => {
      elementObjects.helloPagetext().contains('Hello John!') 
  })

    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })

    Then('Clear input box', () => {
      elementObjects.forminput().clear()
  })
    When('Enter "Sophia" in input box', () => {
      elementObjects.forminput().type('Sophia') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click()  
  })
    Then('Hello Page "Hello Sophia!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Sophia!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      elementObjects.forminput().clear() 
  })
    When('Enter "Charlie" in input box', () => {
      elementObjects.forminput().type('Charlie') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Charlie!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Charlie!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      elementObjects.forminput().clear() 
  })
    When('Enter "Emily" in input box', () => {
      elementObjects.forminput().type('Emily') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Emily!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Emily!') 
  })



  Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Form button should be visible and Click on it', () => {
      elementObjects.form().should('be.visible').contains('Form').click()  
  })

    When('Form button Simple Form Submission text display', () => {
        elementObjects.formPageText()  
  })

    When('Enter "John" in input box', () => {
      elementObjects.forminput().should('be.visible').should('be.enabled').type('John')  
  })

    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click()  
  })

    Then('Hello Page "Hello John!" text display', () => {
      elementObjects.helloPagetext().contains('Hello John!') 
  })

    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })

    Then('Clear input box', () => {
      elementObjects.forminput().clear()
  })
    When('Enter "Sophia" in input box', () => {
      elementObjects.forminput().type('Sophia') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click()  
  })
    Then('Hello Page "Hello Sophia!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Sophia!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      elementObjects.forminput().clear() 
  })
    When('Enter "Charlie" in input box', () => {
      elementObjects.forminput().type('Charlie') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Charlie!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Charlie!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      elementObjects.forminput().clear() 
  })
    When('Enter "Emily" in input box', () => {
      elementObjects.forminput().type('Emily') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Emily!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Emily!') 
  })



Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('Form button should be visible and Click on it', () => {
      elementObjects.form().should('be.visible').contains('Form').click()  
  })

    When('Form button Simple Form Submission text display', () => {
        elementObjects.formPageText()  
  })

    When('Enter "John" in input box', () => {
      elementObjects.forminput().should('be.visible').should('be.enabled').type('John')  
  })

    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click()  
  })

    Then('Hello Page "Hello John!" text display', () => {
      elementObjects.helloPagetext().contains('Hello John!') 
  })

    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })

    Then('Clear input box', () => {
      elementObjects.forminput().clear()
  })
    When('Enter "Sophia" in input box', () => {
      elementObjects.forminput().type('Sophia') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click()  
  })
    Then('Hello Page "Hello Sophia!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Sophia!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      elementObjects.forminput().clear() 
  })
    When('Enter "Charlie" in input box', () => {
      elementObjects.forminput().type('Charlie') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Charlie!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Charlie!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      elementObjects.forminput().clear() 
  })
    When('Enter "Emily" in input box', () => {
      elementObjects.forminput().type('Emily') 
  })
    And('Click to Submit button', () => {
      elementObjects.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Emily!" text display', () => {
      elementObjects.helloPagetext().contains('Hello Emily!') 
  })
