
var game = {
  count: 0,
  colors: ['green', 'red', 'blue', 'yellow'],
  computer: [],
  player: [],
  sound:{
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'), 
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'), 
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'), 
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  },
  strictMode: false,
}

function newGame(){
    game.count = 0;
    game.computer = [];
    game.player = [];
    game.strictMode = false;
}

function computerMove(){
    var select = Math.floor((Math.random() * 4) + 1);
    var compColor = game.colors[select];
    console.log(compColor);
    game.computer.push(game.colors[select]);
    game.sound[compColor].play();
}










function showSecondPanel() {
    $('.panel-2').show();
}
function showThirdPanel() {
    $('.game, .start-win-panel').show();

}


$(document).ready(function () {

    $('.panel-1 a').click(function () {
        $('.panel-1').hide('drop', { direction: 'left' }, 1000, showSecondPanel);
    });

    $('.panel-2 a').click(function () {
        var id = this.id;
        game.strictMode = id === 'strict-mode-selection' ? true : false; // if Strict Mode strictMode is true
        $('.panel-2').hide('drop', { direction: 'left' }, 1000, showThirdPanel);
    });
    $('#startWin').click(function () {
        $('.start-win-panel').hide();
    });

    var green = $("#control-top-left").data("color");
    console.log(green);

    $('#control-top-left').click(computerMove);




});


//https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416#.psrjgd2qu