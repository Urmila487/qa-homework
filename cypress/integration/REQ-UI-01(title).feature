Feature: The Title should be "UI Testing Site" on every site

  Verify Title should be UI Testing Site

  Scenario: Site 1 Title should be "UI Testing Site"
    Given Open Website Site 1
    When Validate Title of UI Testing
    Then Validate UI Testing Site title


  Scenario: Site 2 Title should be "UI Testing Site"
    Given Open Website Site 2
    When Validate Title of UI Testing
    Then Validate UI Testing Site title


  Scenario: Site 3 Title should be "UI Testing Site"
    Given open Website Site 3
    When I validate Title of UI Testing
    Then UI Testing Site title should be Validate