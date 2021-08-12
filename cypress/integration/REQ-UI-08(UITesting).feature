Feature: When I click on the UI Testing button, I should get navigated to the Home page

  I want to Click UI Testing button and Navigate to Home page 

  Scenario: Site 1 Click UI Testing button and Navigate to Home page
    Given I open Website Site 1
    When UI Testing button should be visible
    When I Click to UI Testing button
    Then Navigate to Home Page and Home Page display


  Scenario: Site 2 Click UI Testing button and Navigate to Home page
    Given I open Website Site 2
    When UI Testing button should be visible
    When I Click to UI Testing button
    Then Navigate to Home Page and Home Page display


  Scenario: Site 3 Click UI Testing button and Navigate to Home page
    Given I open Website Site 3
    When UI Testing button should be visible
    When I Click to UI Testing button
    Then Navigate to Home Page and Home Page display