Feature: playlists 

    Rule: the user should see his playlists elements in the dashboard if he has playlists
        Scenario: 
            When user logged in
            Then the playlists should be visible

    Rule: the user should see the public playlists elements in the dashboard
        Scenario: 
            When user logged in
            Then the playlists should be visible

    Rule: the user should play the playlists elements
        Scenario: Play
            Given the user is logged in
            When I clicke on "playlist elements"
            Then "the playlist songs" should be visible

    Rule: the user should create new playlist elements
        Scenario: popUp Create
            Given the user is logged in
            When I clicke on "plus button"
            Then "the popUp Create" should be visible

        Scenario: Create
            Given popUp Create
            When I enter "a playlist elements name" in to "input field"
            And I click on "Create"
            Then "new playlist" should be created

        Scenario: cancellation Create
            Given popUp Create
            When I enter "a playlist elements name" in to "input field"
            And I click on "Cancel"
            Then "popUp" should be closed
            And "new playlist" should not be created

    
