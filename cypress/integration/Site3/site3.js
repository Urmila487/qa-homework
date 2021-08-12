import ElementObjects from '../pageObjects/elementObjects'
import Logo from '../pageObjects/logo'
const logo = new Logo()
const elementObjects  = new ElementObjects()

Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    Then('Validate title of UI Testing Site', () => {
      elementObjects.getTitle().should('include','UI Testing Site').should('eq', 'UI Testing Site')
  });


  
Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });
  
    When('Company Logo should be visible display', () => {
      logo.getLogo().should('be.visible') //To check Logo is display and Capture Snapshot
            
  })
  
    Then('Get Screenshot of company logo', () => {
      logo.captureLogo()
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Home button should be visible', () => {
      elementObjects.home().should('be.visible')  
  })

    When('Click to Home button', () => {
      elementObjects.home().contains('Home').click()  
  })

    Then('Navigate to Home Page and Home Page display', () => {
      elementObjects.homePageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Home button should be visible and Click on it', () => {
      elementObjects.home().should('be.visible').contains('Home').click()  
  })

    When('Home button should be active display and validate to active status', () => {
      elementObjects.active().click({ force: true })  
  })

    Then('Home button text Highlight display', () => {
      elementObjects.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Form button should be visible', () => {
      elementObjects.form().should('be.visible')  
  })

    And('Click to Form button', () => {
      elementObjects.form().contains('Form').click()  
  })

    Then('Navigate to Form Page and Form Page display', () => {
      elementObjects.formPageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Form button should be visible and Click on it', () => {
      elementObjects.form().should('be.visible').contains('Form').click()  
  })

    When('Form button active display validate to active status', () => {
      elementObjects.active().click({ force: true })  
  })

    Then('Form button text Highlight display', () => {
      elementObjects.form().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Error button should be visible', () => {
      elementObjects.error().should('be.visible')  
  })

    And('Click to Error button', () => {
      elementObjects.error().contains('Error').click()  
  })

    Then('Navigate to Error Page and get a 404 HTTP response code', () => {
      elementObjects.errorPageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('UI Testing button should be visible', () => {
      elementObjects.uiTesting().should('be.visible')  
  })

    When('Click to UI Testing button', () => {
      elementObjects.uiTesting().contains('UI Testing').click()  
  })

    Then('Navigate to Home Page and Home Page display', () => {
      elementObjects.homePageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Home button should be visible', () => {
      elementObjects.home().should('be.visible')  
  })

    Then('Validate h1 tag and Welcome to Pixelmatic QA department text visible', () => {
      elementObjects.homePageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Home button should be visible', () => {
      elementObjects.home().should('be.visible')  
  })

    Then('Validate p tag and This site is dedicated to perform text visible', () => {
      elementObjects.homePageTextP().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
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


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
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
