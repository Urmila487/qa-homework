Feature: The Title should be "UI Testing Site" on every site

  I want to Title should be UI Testing Site

  Scenario: Site 1 Title should be "UI Testing Site"
    Given I open Website Site 1
    When I validate Title of UI Testing
    Then UI Testing Site title should be Validate


  Scenario: Site 2 Title should be "UI Testing Site"
    Given I open Website Site 2
    When I validate Title of UI Testing
    Then UI Testing Site title should be Validate


  Scenario: Site 3 Title should be "UI Testing Site"
    Given I open Website Site 3
    When I validate Title of UI Testing
    Then UI Testing Site title should be Validate