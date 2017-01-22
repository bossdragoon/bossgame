$(function () {

    var digitsGoal;
    var cntDigit = 4;
    var gameCount = 10;
    var cnt = 0;
    $(':input').not('#startBtn').val('').prop('disabled', true);
    $('#startBtn').prop('disabled', false);

    function runGame() {
        $('#startBtn').prop('disabled', true);
        $(':input').not('#startBtn').val('').prop('disabled', false);

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
        console.log(digitsGoal);

    }

    function checkGuess() {
        var $frm = $('form');
        var digitsfrm = $frm.serializeArray();

        var digits = [];
        var digits_goal = [];

        var num = '';
        for (var i = 0; i < digitsfrm.length; i++) {
            num += (digitsfrm[i].value !== "" ? digitsfrm[i].value : "0");
        }
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
            if (digits[j] === digits_goal[j]) {
                guessTxt += "<span class='text-success'>" + "O" + "</span>";
                cntCorrect++;
            } else if (digits_goal.indexOf(digits[j]) > -1) {
                guessTxt += "<span class='text-warning'>" + "+" + "</span>";
            } else {
                guessTxt += "X";
            }

        }

        var txt = '<tr>'
                + '<td>' + num + '</td>'
                + '<td>' + guessTxt + '</td>'
                + (cnt === gameCount ? "" : '<td>เหลืออีก ' + (gameCount - cnt) + ' ครั้ง</td>')
                + '</tr>';
        $('#guess-check table tbody').append(txt);
        console.log(cntCorrect);
        if (cntCorrect >= 4) {
            alert('Congratulation!! You win!!');
            return 1;
        }


        if (cnt === gameCount) {
            alert('Game End');
            gameEnd();
        }
        cnt++;

    }

    function gameEnd() {
        $(':input').not('#startBtn').val('').prop('disabled', true);
        $('#startBtn').prop('disabled', false);
        $('#guess-check table tbody').empty();
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


});