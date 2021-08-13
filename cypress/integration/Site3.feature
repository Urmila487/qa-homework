Feature: Site 3 (http://127.0.0.1:8080/) All TestCases added

    Verify All TestCases in Site (http://127.0.0.1:8080/)

    Background:
        Given Open Website

    Scenario: Title should be "UI Testing Site"

        Then Validate UI Testing Site title

    Scenario: Company Logo should be visible

        When Company Logo is visible
        Then Get Screenshot of company logo

    Scenario: Click Home button and Navigate to Home page

        When Home button should be visible
        When Click Home button
        Then Page will get navigated to Home Page

    Scenario: Click on Home button and "Home" text gets Highlighted and active display

        When Home button is visible click Home button
        When Home button is active display and validate to active status
        Then Home button text gets Highlighted

    Scenario: Click Form button and Navigate to Form page

        When Form button should be visible
        And Click on Form button
        Then Page will navigate to Form Page

    Scenario: Click Form button and form text form should turn to active status

        When Click Form button
        Then Form should turn to active status

    Scenario: Click Error button and get a 404 HTTP response code

        When Click to Error button
        Then I should get 404 HTTP response code

    Scenario: Click on UI Testing button and Navigate to Home page

        When UI Testing button should be visible
        When Click to UI Testing button
        Then Page will get navigated to Home page


    Scenario: "Welcome to Pixelmatic QA department" Text should be visible on Home page in <h1> tag.

        When Home button should be visible
        Then Welcome to Pixelmatic QA department text should be visible on  in <h1> tag on Home page

    Scenario: Check in Home page <p> tag "This site is dedicated to perform.." text should be visible on Home screen

        When Home button should be visible
        Then Validate <p> tag and This site is dedicated to perform some exercises and demonstrate automated web testing text visible

    Scenario: Check in Form Page one input box and one submit button display

        When Form button should be visible and Click on it
        When Form Page Simple Form Submission text display
        And Form Page one Input box Enable and Visible display
        Then Form Page one Submit button Enable and Visible display

    Scenario: On form page in input text type <value> and submit the form

        When Form button should be visible and Click on it
        When Form button Simple Form Submission text display
        When Enter "John" in input box
        And Click to Submit button
        Then Hello Page "Hello John!" text display
        Then Click to Back browser button
        Then Clear input box
        When Enter "Sophia" in input box
        And Click to Submit button
        Then Hello Page "Hello Sophia!" text display
        Then Click to Back browser button
        Then Clear input box
        When Enter "Charlie" in input box
        And Click to Submit button
        Then Hello Page "Hello Charlie!" text display
        Then Click to Back browser button
        Then Clear input box
        When Enter "Emily" in input box
        And Click to Submit button
        Then Hello Page "Hello Emily!" text display