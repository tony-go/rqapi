Feature: Data fetch
  Scenario: From external api
    Given I have the api gateway
      And I have the path "/data"
      And I have the method "GET"
    When I run the API 
    Then I should receive a response with the status 200
      And the response body at "title" should equal "Yolo"