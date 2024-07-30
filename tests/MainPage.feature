Feature: Main Page

  Scenario: should have a title
    Given I am on the "main" page
    Then I should see a title "F3 Muletown"

  Scenario: should have links to the other pages
    Given I am on the "main" page
    Then I should see a link to "NEW TO F3 [FNG]" that goes to "/fng"
    And I should see a link to "WORKOUTS [AO]" that goes to "/workouts"
