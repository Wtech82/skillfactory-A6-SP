
const numDivs = 36;
//const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

let cnt_target = 0;
let cnt_miss = 0;




function round() {

  let divSelector = randomDivId();
     $(divSelector).addClass("target");
     let I = $(divSelector).attr('id');
     $(divSelector).text(I);
  
  if (cnt_target === 1) {
    firstHitTime = getTimestamp();
  }

  if (cnt_target === 10) {
    $(divSelector).removeClass("target");
    $(divSelector).empty();
    endGame();

  }

}



function endGame() {

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  

  $("#win-message").removeClass("d-none");

}



function handleClick(event) {
  
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    cnt_target = cnt_target + 1;
    $("#green").addClass('cnt').text(cnt_target);

    $(event.target).empty();
    $(event.target).removeClass('target');
    
    round();
  } 
  else {
    $(event.target).addClass("miss");
    cnt_miss = cnt_miss +1;
    $("#red").addClass('cnt').text(cnt_miss);

  }
}

function init() {

  $('div#about').hide();
  $("#button-about").click (function() {

  $("div#about").toggle(1000);

  });

  
  $('div#game_board').hide();
  $("#button-start").click(round);

  $(".game-field").click(handleClick);

  
  $("#button-reload").click(function() {
    location.reload();
  });
  $("#button-show").click (function() {

  $("div#game_board").toggle(1000);

  });

}

$(document).ready(init);
