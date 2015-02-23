$(function(){

  //on connect
  SC.connect(function() {

    //get authorized user info
    SC.get('/me', function (me) { 
      console.log('connected ' + me.username)
      getPlaylist(me.id)
    });

  });


  var getPlaylist = function(userID){
    SC.get('/playlists', {user_id: userID}, function (playlist){
      console.log(playlist);
      _.each(playlist.tracks, function (track){
        console.log(track);
      });
    })
  }

})