Feature: Cricket Match

Given I am on the ICICI website
When I go to the match centre link
Then I see the list of match of the day
And I see the <location> of the match and the <time>

Example:
| location | time |
| England | 12:00 PM |
| India | 3:30 PM| 
| New Zealand | 7:00 PM |