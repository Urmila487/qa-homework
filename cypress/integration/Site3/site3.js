import Homepage from '../pageObjects/homepage'
import Logo from '../pageObjects/logo'
import Formpage from '../pageObjects/formpage'
import Errorpage from '../pageObjects/errorpage'

const logo = new Logo()
const homepage  = new Homepage()
const formpage = new Formpage()
const errorpage = new Errorpage()

Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    Then('Validate title of UI Testing Site', () => {
      homepage.getTitle().should('include','UI Testing Site').should('eq', 'UI Testing Site')
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
      homepage.home().should('be.visible')  
  })

    When('Click to Home button', () => {
      homepage.home().contains('Home').click()  
  })

    Then('Navigate to Home Page and Home Page display', () => {
      homepage.homePageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Home button should be visible and Click on it', () => {
      homepage.home().should('be.visible').contains('Home').click()  
  })

    When('Home button should be active display and validate to active status', () => {
      homepage.active().click({ force: true })  
  })

    Then('Home button text Highlight display', () => {
      homepage.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Form button should be visible', () => {
      formpage.form().should('be.visible')  
  })

    And('Click to Form button', () => {
      formpage.form().contains('Form').click()  
  })

    Then('Navigate to Form Page and Form Page display', () => {
      formpage.formPageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Form button should be visible and Click on it', () => {
      formpage.form().should('be.visible').contains('Form').click()  
  })

    When('Form button active display validate to active status', () => {
      formpage.active().click({ force: true })  
  })

    Then('Form button text Highlight display', () => {
      formpage.form().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Error button should be visible', () => {
      errorpage.error().should('be.visible')  
  })

    And('Click to Error button', () => {
      errorpage.error().contains('Error').click()  
  })

    Then('Navigate to Error Page and get a 404 HTTP response code', () => {
      errorpage.errorPageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('UI Testing button should be visible', () => {
      homepage.uiTesting().should('be.visible')  
  })

    When('Click to UI Testing button', () => {
      homepage.uiTesting().contains('UI Testing').click()  
  })

    Then('Navigate to Home Page and Home Page display', () => {
      homepage.homePageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Home button should be visible', () => {
      homepage.home().should('be.visible')  
  })

    Then('Validate h1 tag and Welcome to Pixelmatic QA department text visible', () => {
      homepage.homePageText().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Home button should be visible', () => {
      homepage.home().should('be.visible')  
  })

    Then('Validate p tag and This site is dedicated to perform text visible', () => {
      homepage.homePageTextP().should('be.visible') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Form button should be visible and Click on it', () => {
      formpage.form().should('be.visible').contains('Form').click()  
  })

    When('Form Page Simple Form Submission text display', () => {
      formpage.formPageText().should('be.visible')  
  })

    And('Form Page one Input box Enable and Visible display', () => {
      formpage.forminput().should('be.visible').should('be.enabled')  
  })

    Then('Form Page one Submit button Enable and Visible display', () => {
      formpage.formsubmit().should('be.visible').should('be.enabled') 
  });


Given('Open the Website', () => {
    cy.visit('http://127.0.0.1:8080')
  });

    When('Form button should be visible and Click on it', () => {
      formpage.form().should('be.visible').contains('Form').click()  
  })

    When('Form button Simple Form Submission text display', () => {
      formpage.formPageText()  
  })

    When('Enter "John" in input box', () => {
      formpage.forminput().should('be.visible').should('be.enabled').type('John')  
  })

    And('Click to Submit button', () => {
      formpage.formsubmit().should('be.visible').should('be.enabled').click()  
  })

    Then('Hello Page "Hello John!" text display', () => {
      formpage.helloPagetext().contains('Hello John!') 
  })

    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })

    Then('Clear input box', () => {
      formpage.forminput().clear()
  })
    When('Enter "Sophia" in input box', () => {
      formpage.forminput().type('Sophia') 
  })
    And('Click to Submit button', () => {
      formpage.formsubmit().should('be.visible').should('be.enabled').click()  
  })
    Then('Hello Page "Hello Sophia!" text display', () => {
      formpage.helloPagetext().contains('Hello Sophia!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      formpage.forminput().clear() 
  })
    When('Enter "Charlie" in input box', () => {
      formpage.forminput().type('Charlie') 
  })
    And('Click to Submit button', () => {
      formpage.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Charlie!" text display', () => {
      formpage.helloPagetext().contains('Hello Charlie!') 
  })
    Then('Click to Back browser button', () => {
      cy.go(-1) 
  })
    Then('Clear input box', () => {
      formpage.forminput().clear() 
  })
    When('Enter "Emily" in input box', () => {
      formpage.forminput().type('Emily') 
  })
    And('Click to Submit button', () => {
      formpage.formsubmit().should('be.visible').should('be.enabled').click() 
  })
    Then('Hello Page "Hello Emily!" text display', () => {
      formpage.helloPagetext().contains('Hello Emily!') 
  })
