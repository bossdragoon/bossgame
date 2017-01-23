$(function () {

    var digitsGoal;
    var cntDigit = 4;
    var gameCount = 10;
    var cnt = 0;
    var btnText = $('#startBtn span').text();

    $(':input').not('#startBtn').val('').prop('disabled', true);
    $('#startBtn').prop('disabled', false);

    function runGame() {
        $('#startBtn').prop('disabled', true);
        $(':input').not('#startBtn').val('').prop('disabled', false);

        $('#guess-check table tbody').empty();


        $('#startBtn span').text('เริ่มเกมได้');

        digitsGoal = '';
        var testDup = [];
        for (var i = 0; i < cntDigit; i += 1) {
            var nmbgen;
            do {
                nmbgen = (Math.floor(Math.random() * 9));
            } while (testDup.indexOf(nmbgen) > -1)
            testDup.push(nmbgen);
            digitsGoal += nmbgen;
        }
        cnt = 1;
//        console.log(digitsGoal);

        $('#user-guess').focus();


    }

    function checkGuess() {
//        var $frm = $('form');
//        var digitsfrm = $frm.serializeArray();

        var digitsfrm = $('#user-guess').val();
        digitsfrm = (digitsfrm === "" ? "0000" : digitsfrm);

        var digits = [];
        var digits_goal = [];

        var num = digitsfrm;
//        var num = '';
//        for (var i = 0; i < digitsfrm.length; i++) {
//            num += (digitsfrm[i].value !== "" ? digitsfrm[i].value : "0");
//        }
        console.log(num);
        var numGoal = digitsGoal.toString();

        for (var i = 0, len = num.length; i < len; i += 1) {
            digits.push(num.charAt(i));
        }
        for (var i = 0, len = numGoal.length; i < len; i += 1) {
            digits_goal.push(numGoal.charAt(i));
        }









        var guessTxt = "";
        var cntCorrect = 0;
        for (var j = 0; j < 4; j++) {
            var sym;
            if (digits[j] === digits_goal[j]) {
//                sym = "O";
                sym = "<i class='fa fa-circle-thin fa-2x'></i>";
                guessTxt += "<span class='text-correct'>" + sym + "</span>";
                cntCorrect++;
            } else if (digits_goal.indexOf(digits[j]) > -1) {
//                sym = "+";
                sym = "<i class='fa fa-plus fa-2x'></i>";
                guessTxt += "<span class='text-mid'>" + sym + "</span>";
            } else {
//                sym = "X";
                sym = "<i class='fa fa-times fa-2x'></i>";
                guessTxt += "<span class='text-wrong'>" + sym + "</span>";
            }

            guessTxt += "&nbsp;";

        }

        var txt = '<tr>'
                + '<td>' + num + '</td>'
                + '<td>' + guessTxt + '</td>'
                + (cnt === gameCount ? "" : '<td>เหลืออีก ' + (gameCount - cnt) + ' ครั้ง</td>')
                + '</tr>';
        $('#guess-check table tbody').append(txt);
//        console.log(cntCorrect);
        $('#user-guess').val('');

        if (cntCorrect >= 4) {
            alert('Congratulation!! You win!!');
            gameEnd();
            return 1;
        }


        if (cnt === gameCount) {
            alert('Game End');
            gameEnd();
            return 1;
        }
        cnt++;

        $('#user-guess').focus();

    }

    function gameEnd() {
        $(':input').not('#startBtn').val('').prop('disabled', true);
        $('#startBtn').prop('disabled', false);

        $('#startBtn span').text(btnText);

    }


    $('#startBtn').on('click', function () {
        runGame();
        return false;
    });

    $('#restartBtn').on('click', function () {
        gameEnd();
        runGame();
        return false;
    });

    $('form').on('submit', function () {
        checkGuess();
        return false;
    });

    //limit number input
    $('#user-guess').on('keyup', function () {
        var $this = $(this);
        var keyLen = $this.val().length,
            maxLen = $this.attr('maxlength');
        
        if (keyLen > maxLen){
            $this.val($this.val().slice(0, maxLen));
        }
    });


});