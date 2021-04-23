function adduser() {
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("Player-1", player1_name);
    localStorage.setItem("Player-2", player2_name);

    window.location = "gamepage.html";
}