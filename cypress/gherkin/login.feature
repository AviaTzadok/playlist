Feature: login

    Rule: possibility login
        Scenario: login if password and user name is correct
            When I enter correct "name" in the "user name" field
            And I enter correct "password" in the "password" field
            And "I click" on submit
            Then "Home" page should be loaded

    
    Rule: not possibility submit with username or password field empty
        Scenario: login with no username
            When I not enter "name" in the "user name" field
            And I enter "password" in the "password" field
            Then submit onpressable

        Scenario: login with no password
            When I not enter "password" in the "password" field
            And I enter "name" in the "user name" field
            Then submit onpressable

    Rule: not possibility login with wrong password or wrong user name
         Scenario: login with wrong username
            When I enter wrong "name" in the "user name" field
            And I enter "password" in the "password" field
            And "I click" on submit
            Then popUp error message
            And "Home" page should not be loaded

        Scenario: login with wrong password
            When I enter wrong "password" in the "password" field
            And I enter "name" in the "user name" field
            And "I click" on submit
            Then popUp error message
            And "Home" page should not be loaded


        