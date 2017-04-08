$(document).ready(function() {
    
    /* Store search button in jQuery variable */
    var $search_btn = $('#search-btn');
    
    /* Store search box */
    var $search_query = $('#search-text');
    
    /*////////////////////////////////////////////////////////*/
    /*/// --FUNCTION--  Search button click evenet handler ///*/
    /*////////////////////////////////////////////////////////*/
    $search_btn.on('click', function(){
        
        /* Calling search function on user search */
        Trackster.searchTracksByTitle($search_query.val());
        
        
        
    });
    
    
    
    var Trackster = {};

/*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks. 
*/
    Trackster.renderTracks = function(tracks) {

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
                var results = data.tracks.items[0]['name'];
                console.log(results);
            }
        });
    };
    
});

