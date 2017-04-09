$(document).ready(function() {
    var Trackster = {};
    
    /* Store search button in jQuery variable */
    var $search_btn = $('#search-btn');
    
    /* Store search box */
    var $search_query = $('#search-text');
    
    /*/// FUNCTION -> search event handler ///*/
    $search_btn.on('click', function(){
        
        /* Calling search function on user search */
        Trackster.searchTracksByTitle($search_query.val());
        
    });
/*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks. 
*/
    Trackster.renderTracks = function(tracks) {
        var $song_list = $('#song-list');
        
        
        
    };
/*
    Given a search term as a string, query the Spotify API.
    Render the tracks given in the API query response.
*/
    Trackster.searchTracksByTitle = function(title) {
        /* Call Spotify API with ajax method*/
        $.ajax({
            url: 'https://api.spotify.com/v1/search?type=track&q=' + title,
            dataType: 'json',
            crossDomain: true,
            success: function(data) {
                var results = data.tracks.items;
                console.log(results);
            }
        });
    };
    
});

