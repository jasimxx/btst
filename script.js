function placeBet() {
    let result = Math.random() < 0.5 ? "You Win! 🎉" : "You Lose! 😢";
    document.getElementById("result").innerText = result;
}
