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



function  determineHighlightColor(color){
    console.log(color + ' HIGHLIGHT CLASS FUNCTION');
    switch(color){
        case 'green':
        document.getElementById('control-top-left').style.backgroundColor = 'lime';
        setTimeout(function(){  document.getElementById('control-top-left').style.backgroundColor = '#00691C'; }, 500);
        break;
        case 'red':
        document.getElementById('control-top-right').style.backgroundColor = 'red';
        setTimeout(function(){  document.getElementById('control-top-right').style.backgroundColor = '#7D0000'; }, 500);
        break;
        case 'blue':
        document.getElementById('control-bottom-right').style.backgroundColor = 'blue';
        setTimeout(function(){ document.getElementById('control-bottom-right').style.backgroundColor = '#001691'; }, 500);
        break;
        case 'yellow':
        document.getElementById('control-bottom-left').style.backgroundColor = '#FCFC00';
        setTimeout(function(){ document.getElementById('control-bottom-left').style.backgroundColor = '#DEDC5F'; }, 500);
        default:
        console.log(color);   
    }
}



function newGame(){
    game.count = 0;
    game.computer = [];
    game.player = [];
    game.strictMode = false;
}

function computerMove(){
    var select = Math.floor(Math.random() * (3-0 + 1) + 0);
    var compColor = game.colors[select];
    console.log(compColor);
    game.computer.push(game.colors[select]);
    game.sound[compColor].play();
    console.log(game.computer);
    determineHighlightColor(compColor);  // 'add color to board'    
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
        computerMove();
    });

    var green = $("#control-top-left").data("color");
    console.log(green);

  //  $('#control-top-left').click(computerMove);




});



//Math.floor(Math.random() * (num2-num1 + 1) + num1)......num1 = 0 and num2 = 3 random num btw 0-3 