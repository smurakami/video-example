var players = [
  '#player1',
  '#player2',
  '#player3',
  '#player4',
];

var play = function(index){
  if (index >= players.length) return;
  var $player = $(players[index]);
  $player.removeClass('hidden');
  $player.bind('ended', function(){
    if (index < players.length - 1) {
      $player.addClass('hidden');
      play(index+1)
    }
  });
  $player[0].play();
}

$(function(){
  // 動画の再生を動的に生成
  for (var i = 1, l = players.length; i <= l; i++){
    var $player = $("<video height='240' id='player"+i+"' width='320'> <source src='mov/sample"+i+".mp4'></source> </video>")
    $('#players').append($player);
  }

  for (var i = 0, l = players.length; i < l; i++){
    $(players[i]).addClass('hidden');
  }
  play(0);
});