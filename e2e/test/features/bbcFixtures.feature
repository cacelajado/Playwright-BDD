Feature: Validate Football Scores and Fixtures

  Scenario: Verify the there is a team playing today in football scores and fixtures
    Given today's date is 10-05-2024
    When I request to see the teams playing today
    Then the system should display the list of teams playing today
    And there should be at least one team playing today

