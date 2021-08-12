Feature: Site 2 (http://192.168.1.7:8080) All TestCase added 

    Verify All TestCases in Site (http://192.168.1.7:8080)

    Background: 
        Given Open the Website

    Scenario: Title should be "UI Testing Site"

        Then Validate title of UI Testing Site

    Scenario: Company Logo should be visible

        When Company Logo should be visible display
        Then Get Screenshot of company logo

    Scenario: Click Home button and Navigate to Home page
        
        When Home button should be visible
        When Click to Home button
        Then Navigate to Home Page and Home Page display

    Scenario: Click Home button and Home text highlighted and active display
        
        When Home button should be visible and Click on it
        When Home button should be active display and validate to active status
        Then Home button text Highlight display

    Scenario: Click Form button and Navigate to Form page
    
        When Form button should be visible
        And Click to Form button
        Then Navigate to Form Page and Form Page display

    Scenario: Click Form button and Form text highlighted and active display
       
        When Form button should be visible and Click on it
        When Form button active display validate to active status
        Then Form button text Highlight display

    Scenario: Click Error button and get a 404 HTTP response code
       
        When Error button should be visible
        And Click to Error button
        Then Navigate to Error Page and get a 404 HTTP response code

    Scenario: Click UI Testing button and Navigate to Home page
        
        When UI Testing button should be visible
        When Click to UI Testing button
        Then Navigate to Home Page and Home Page display

    Scenario: Check in Home page h1 tag Welcome to Pixelmatic QA department text visible
  
        When Home button should be visible
        Then Validate h1 tag and Welcome to Pixelmatic QA department text visible

    Scenario: Check in Home page p tag "This site is dedicated to perform.." text display
       
        When Home button should be visible
        Then Validate p tag and This site is dedicated to perform text visible

    Scenario: Check in Form Page one input box and one submit button display
        
        When Form button should be visible and Click on it
        When Form Page Simple Form Submission text display
        And Form Page one Input box Enable and Visible display 
        Then Form Page one Submit button Enable and Visible display

    Scenario: Check in Form Page Enter Value in input box and Click submit button,then Page redirect and  Hello ! text display
       
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