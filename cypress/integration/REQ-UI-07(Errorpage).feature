Feature: When I click on the Error button, I should get a 404 HTTP response code

  I want to Click Error button and get a 404 HTTP response code

  Scenario: Site 1 Click Error button and get a 404 HTTP response code
    Given I open Website Site 1
    When Error button should be visible
    And I Click to Error button
    Then Navigate to Error Page and get a 404 HTTP response code


  Scenario: Site 2 Click Error button and get a 404 HTTP response code
    Given I open Website Site 2
    When Error button should be visible
    And I Click to Error button
    Then Navigate to Error Page and get a 404 HTTP response code


  Scenario: Site 3 Click Error button and get a 404 HTTP response code
    Given I open Website Site 3
    When Error button should be visible
    And I Click to Error button
    Then Navigate to Error Page and get a 404 HTTP response code