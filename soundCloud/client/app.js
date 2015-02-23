$(function(){

  //on connect
  SC.connect(function() {

    //get authorized user info
    SC.get('/me', function (me) { 
      getPlaylist(me.id)
    });

  });

  //get playlist url
  var getPlaylist = function(userID){
    SC.get('/playlists', {user_id: userID}, function (playlist){
      playlistUrl = playlist[0].permalink_url;
      getWidget(playlistUrl);
    })
  }

  //get widget for playlist and insert into DOM
  var getWidget = function(url){
    console.log('getting widget',url)
    SC.oEmbed(url, {auto_play: true, iframe:true }, function (oEmbed){
      $('.player').html(oEmbed.html);
    });
  }

})