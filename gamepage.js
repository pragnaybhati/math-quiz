player1 = localStorage.getItem("Player-1");
player2 = localStorage.getItem("Player-2");
player1_score = 0;
player2_score = 0;

document.getElementById("player1-name").innerHTML = player1 + " :";
document.getElementById("player2-name").innerHTML = player2 + " :";
document.getElementById("player1-score").innerHTML = player1_score;
document.getElementById("player2-score").innerHTML = player2_score;
document.getElementById("player-question").innerHTML = "Question Turn - " + player1;
document.getElementById("player-answer").innerHTML = "Answer Turn - " + player2;

function send() {
    number1 = document.getElementById("input-q-1").value;
    number2 = document.getElementById("input-q-2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_word = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input-q-1").value = "";
    document.getElementById("input-q-2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1-score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2-score").innerHTML = player2_score;
        }
    } else {
        if (answer_turn == "player1") {
            player2_score = player2_score + 1;
            document.getElementById("player2-score").innerHTML = player2_score;
        } else {
            player1_score = player1_score + 1;
            document.getElementById("player1-score").innerHTML = player1_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player-question").innerHTML = "Question Turn - " + player2;
    } else {
        question_turn = "player1";
        document.getElementById("player-question").innerHTML = "Question Turn - " + player1;
    }
    if (answer_turn == player1) {
        answer_turn = "player2";
        document.getElementById("player-answer").innerHTML = "Answer Turn -" + player2;
    } else {
        answer_turn = "player1";
        document.getElementById("player-answer").innerHTML = "Answer Turn -" + player1;
    }
    document.getElementById("output").innerHTML = "";
}