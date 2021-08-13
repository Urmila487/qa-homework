import Homepage from '../pageObjects/homepage'
import Logo from '../pageObjects/logo'
import Formpage from '../pageObjects/formpage'
import Errorpage from '../pageObjects/errorpage'

const logo = new Logo()
const homepage  = new Homepage()
const formpage = new Formpage()
const errorpage = new Errorpage()

Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    Then('Validate UI Testing Site title', () => {
      homepage.getTitle().should('include','UI Testing Site').should('eq', 'UI Testing Site')
  });


  
Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });
  
    When('Company Logo is visible', () => {
      logo.getLogo().should('be.visible') //To check Logo is display and Capture Snapshot         
  })
  
    Then('Get Screenshot of company logo', () => {
      logo.captureLogo()
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Home button should be visible', () => {
      homepage.home().should('be.visible')  
  })

    When('Click Home button', () => {
      homepage.home().contains('Home').click()  
  })

    Then('Page will get navigated to Home Page', () => {
      homepage.homePageText().should('be.visible') 
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Home button is visible click Home button', () => {
      homepage.home().should('be.visible').contains('Home').click()  
  })

    When('Home button is active display and validate to active status', () => {
      homepage.active().click({ force: true })  
  })

    Then('Home button text gets Highlighted', () => {
      homepage.home().should('have.css', 'color', 'rgb(255, 255, 255)').should('not.have.css','color','rgb(157,157,157)')
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Form button should be visible', () => {
      formpage.form().should('be.visible')  
  })

    And('Click on Form button', () => {
      formpage.form().contains('Form').click()  
  })

    Then('Page will navigate to Form Page', () => {
      formpage.formPageText().should('be.visible') 
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Click Form button', () => {
      formpage.form().should('be.visible').contains('Form').click()  
  })

    Then('Form should turn to active status', () => {
      formpage.active().click({ force: true })  
  })



Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Click to Error button', () => {
      errorpage.error().contains('Error').click()  
  })

    Then('I should get 404 HTTP response code', () => {
      errorpage.errorPageText().should('be.visible') 
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('UI Testing button should be visible', () => {
      homepage.uiTesting().should('be.visible')  
  })

    When('Click to UI Testing button', () => {
      homepage.uiTesting().contains('UI Testing').click()  
  })

    Then('Page will get navigated to Home page', () => {
      homepage.homePageText().should('be.visible') 
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Home button should be visible', () => {
      homepage.home().should('be.visible')  
  })

    Then('Welcome to Pixelmatic QA department text should be visible on  in <h1> tag on Home page', () => {
      homepage.homePageText().should('be.visible') 
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('Home button should be visible', () => {
      homepage.home().should('be.visible')  
  })

    Then('Validate <p> tag and This site is dedicated to perform some exercises and demonstrate automated web testing text visible', () => {
      homepage.homePageTextP().should('be.visible') 
  });


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
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


Given('Open Website', () => {
    cy.visit('http://192.168.1.7:8080/')
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
