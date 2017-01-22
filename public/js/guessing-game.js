$(function () {
    
    var gameCount = 10;
    $(':input').not('#startBtn').val('').prop('disabled',true);
    
    function runGame(){
        $('#startBtn').prop('disabled',true).text('เริ่มเกมได้');
        $(':input').not('#startBtn').val('').prop('disabled',false);
    }
    
    function checkGuess(){
        var $frm = $('form');
        var digits = $frm.serializeArray();
        
        console.log(digits);
        
    }
    
    $('#startBtn').on('click',function(){
        runGame();
        return false;
    });
    
    $('form').on('submit',function(){
        checkGuess();
        return false;
    });
    

});