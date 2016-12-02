
var strictMode;
var twentyCount;

function showSecondPanel() {
    $('.panel-2').show();
}
function showThirdPanel() {
    $('.game').show();
}


$(document).ready(function () {

    $('.panel-1 a').click(function () {
        $('.panel-1').hide('drop', { direction: 'left' }, 1000, showSecondPanel);
    });
    
    $('.panel-2 a').click(function () {
        var id = this.id;
        strictMode = id === 'strict-mode-selection' ? true : false; // if Strict Mode strictMode is true
        $('.panel-2').hide('drop', { direction: 'left' }, 1000, showThirdPanel);
    });






});
