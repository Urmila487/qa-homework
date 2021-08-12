Feature: On the Form page, if you type <value> the input field and submit the form, you should get redirected to the Hello Page

  I want to Check on the Form Page after Enter <value> in input field and submit , 
  that's redirect to Hello <value> Page

  Scenario: Site 1 In Form Page Enter Value in input box and Click submit button,then Page redirect and  Hello ! text display
    Given I open Website Site 1
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

  Scenario: Site 2 In Form Page Enter Value in input box and Click submit button,then Page redirect and  Hello ! text display
    Given I open Website Site 2
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

  Scenario: Site 3 In Form Page Enter Value in input box and Click submit button,then Page redirect and  Hello ! text display
    Given I open Website Site 3
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