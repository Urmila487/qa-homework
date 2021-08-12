Feature: The following text should be visible on the Home page in <p> tag:
"This site is dedicated to perform some exercises and demonstrate
automated web testing."

  I want to check in Home page p tag "This site is dedicated to perform some exercises and demonstrate automated web testing" text visible.

  Scenario: Site 1 check in Home page p tag "This site is dedicated to perform.." text display
    Given I open Website Site 1
    When Home button should be visible
    Then Validate p tag and This site is dedicated to perform text visible


  Scenario: Site 2 check in Home page p tag "This site is dedicated to perform.." text display
    Given I open Website Site 2
    When Home button should be visible
    Then Validate p tag and This site is dedicated to perform text visible


  Scenario: Site 3 check in Home page p tag "This site is dedicated to perform.." text display
    Given I open Website Site 3
    When Home button should be visible
    Then Validate p tag and This site is dedicated to perform text visible
