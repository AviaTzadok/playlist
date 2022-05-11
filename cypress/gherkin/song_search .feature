Feature: Search songs

    Rule: possibility to search songs
        Scenario: search songs
            When I add "text" on the "search bar"
            And I click on "search button"
            Then "search results" should be visible
            And Relevant

    Rule: possibility to play songs
        Scenario: play song
            Given search results
            When I clicke on "song in the list"
            Then "the song video" should be visible


    Rule: possibility to add a new song to to my playlist
        Scenario: add songs to playlist
            Given search results
            When I click on "plus button" in a song
            Then "the song img" should be visible on the "selected playlist"

 

    

    

