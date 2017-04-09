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
        
        //$song_list.empty();
        
        for(var i = 0; i < tracks.length; i++) {
            var song = tracks[i];
            var new_row = 
                '<div class="row song-result">' + 
                '<div class="col-xs-1 col-xs-offset-1 play">' + 
                    '<a href="https://p.scdn.co/mp3-preview/22bf10aff02db272f0a053dff5c0063d729df988?cid=null" target="_blank">' +
                        '<i class="fa fa-play-circle-o fa-2x"></i>' +
                    '</a>' +
                '</div>' +
                '<div class="col-xs-4">' +
                    'Hello' +
                '</div>' +
                '<div class="col-xs-2">' +
                    'Adele' +
                '</div>' +
                '<div class="col-xs-2">' +
                    'Hello' +
                '</div>' +
                '<div class="col-xs-2">' +
                    '73' +
                '</div>';
            
            $song_list.append(new_row);
        }
        
        
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
                /*var results = data.tracks.items;
                console.log(results);*/
                Trackster.renderTracks(data.tracks.items);
            }
        });
    };
    
});

