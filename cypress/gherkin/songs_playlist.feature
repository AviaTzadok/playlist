Feature: songs list

    Background: songs list
        Given playlist

    Rule: possibility to play a song from songs list
        Scenario: play song
            When I clicke on "song in the list"
            Then "the song video" should be visible

    Rule: possibility to delete song if is your playlist
        Scenario: delete song
            When I clicke on "delete song"
            Then "the song video" should be deleted

    Rule: not possibility to delete song if is not your playlist
        Scenario: delete song
           delete song not visible
