
var showTweets = function(ts){
  $table = $("#tweet-texts");
  $table.children().remove();

  ts.forEach(function(d,i){
      var $elem = $('<tr><td><small>'+d.user + '</td><td><a href = "/path-graph.html?tweetid='+d.tweetid+'">' + d.text + '</a></td><tr>');
      if(i%2 == 1)
        $elem.addClass("danger");
      $elem.appendTo($table);
  });
  }

var showTweets2 = function(d){
  $table = $("#one-tweet");
  $table.children().remove();
  var $elem = $('<tr><td>ObjectId</td><td><a>'+d.tweet + 
      '</a></td></tr><tr><td>ScreenName</td><td>' + d.user + 
      '</td></tr><tr><td>Gender</td><td></a>'+d.gender+
      '</a></td></tr><tr><td>Time</td><td>'+d.time+
      '</td></tr><tr><td>Text</td><td><a>'+d.text+'</a></td></tr>');
    $elem.appendTo($table);
}
