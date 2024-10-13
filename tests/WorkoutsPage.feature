Feature: Workouts Page

  Scenario: workouts should be ordered by next up
    Given I am on the "workouts" page
    And the current time is "Wednesday 21:00"
    And the workouts are:
      | ao            | dayLabel  | timeLabel         | time              |
      | Murph Monday  | Monday    | 5:30 AM - 6:15 AM | Monday - 05:30    |
      | Arena         | Tuesday   | 5:15 AM - 6:15 AM | Tuesday - 05:30   |
      | Slag Mountain | Wednesday | 5:20 AM - 6:15 AM | Wednesday - 05:30 |
      | The Refuge    | Thursday  | 5:30 AM - 6:15 AM | Thursday - 05:30  |
      | The Challenge | Friday    | 5:30 AM - 6:15 AM | Friday - 05:30    |
    Then the next workout should be "The Refuge" at "Thursday: 5:30 AM - 6:15 AM"
    Given the current time is "Thursday 5:31"
    Then the next workout should be "The Challenge" at "Friday: 5:30 AM - 6:15 AM"

  Scenario: workouts with the same time should be ordered alphabetically by AO
    Given I am on the "workouts" page
    And the workouts are:
      | ao       | dayLabel | timeLabel         | time           |
      | Zebra    | Monday   | 5:30 AM - 6:15 AM | Monday - 05:30 |
      | Aardvark | Monday   | 5:30 AM - 6:15 AM | Monday - 05:30 |
    Then the next workout should be "Aardvark" at "Monday: 5:30 AM - 6:15 AM"

  Scenario: workouts can be multiple days of the week
    Given I am on the "workouts" page
    And the workouts are:
      | ao      | dayLabel                  | timeLabel         | time                              |
      | Juco    | Monday, Wednesday, Friday | 5:30 AM - 6:15 AM | Monday, Wednesday, Friday - 05:30 |
      | Project | Tuesday, Thursday         | 5:30 AM - 6:15 AM | Tuesday, Thursday - 05:30         |
    And the current time is "Monday 21:00"
    Then the next workout should be "Project" at "Tuesday, Thursday: 5:30 AM - 6:15 AM"
    Given the current time is "Tuesday 21:00"
    Then the next workout should be "Juco" at "Monday, Wednesday, Friday: 5:30 AM - 6:15 AM"
    Given the current time is "Wednesday 21:00"
    Then the next workout should be "Project" at "Tuesday, Thursday: 5:30 AM - 6:15 AM"
    Given the current time is "Thursday 21:00"
    Then the next workout should be "Juco" at "Monday, Wednesday, Friday: 5:30 AM - 6:15 AM"
    Given the current time is "Friday 21:00"
    Then the next workout should be "Juco" at "Monday, Wednesday, Friday: 5:30 AM - 6:15 AM"

  Scenario: workouts can be at different times
    Given I am on the "workouts" page
    And the workouts are:
      | ao   | dayLabel       | timeLabel         | time                   |
      | Juco | Monday, Friday | 5:30 AM - 6:15 AM | Monday, Friday - 05:30 |
      | Rush | Wednesday      | 5:45 PM - 6:30 PM | Wednesday - 17:45      |
    And the current time is "Monday 21:00"
    Then the next workout should be "Rush" at "Wednesday: 5:45 PM - 6:30 PM"
    Given the current time is "Wednesday 17:46"
    Then the next workout should be "Juco" at "Monday, Friday: 5:30 AM - 6:15 AM"
