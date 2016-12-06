var game = {
    count: 0,
    colors: ['green', 'red', 'blue', 'yellow'],
    computer: [],
    player: [],
    sound: {
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    },
    strictMode: false,
    playerTurn: false
}



function determineHighlightColor(color) {
    switch (color) {
        case 'green':
            document.getElementById('control-top-left').style.backgroundColor = 'lime';
            game.sound.green.play();
            setTimeout(function () { document.getElementById('control-top-left').style.backgroundColor = '#00691C'; }, 500);
            break;
        case 'red':
            document.getElementById('control-top-right').style.backgroundColor = 'red';
            game.sound.red.play();
            setTimeout(function () { document.getElementById('control-top-right').style.backgroundColor = '#7D0000'; }, 500);
            break;
        case 'blue':
            document.getElementById('control-bottom-right').style.backgroundColor = 'blue';
            game.sound.blue.play();
            setTimeout(function () { document.getElementById('control-bottom-right').style.backgroundColor = '#001691'; }, 500);
            break;
        case 'yellow':
            document.getElementById('control-bottom-left').style.backgroundColor = '#FCFC00';
            game.sound.yellow.play();
            setTimeout(function () { document.getElementById('control-bottom-left').style.backgroundColor = '#DEDC5F'; }, 500);
    }
}

function computerMove() {
    var select = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    var compColor = game.colors[select];
    game.computer.push(game.colors[select]);
    determineHighlightColor(compColor);  // 'add color to board' 
    game.playerTurn = true;
}

function nextComputerMove() {

}


function compareMoves(){   //compare game and player arrays
    console.log(game.computer);
    console.log(game.player);
     setTimeout(function () { 
         game.playerTurn = false;
         nextComputerMove();
         $('#num').text('1');
         }, 1000);
}

function playerMove(color) {
    determineHighlightColor(color);
    game.player.push(color);
    compareMoves();
}




function newGame() {
    game.count = 0;
    game.computer = [];
    game.player = [];
    game.strictMode = false;
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

    $('.controls').click(function (e) {
        if (game.playerTurn === true) {
            var selection = $(this).attr("data-color");
            playerMove(selection);
        }
        else {
            e.preventDefault();
        }
    });





});



//Math.floor(Math.random() * (num2-num1 + 1) + num1)......num1 = 0 and num2 = 3 random num btw 0-3 