const gameBoard = document.querySelector("#board");

const moves = ["rock", "paper", "scissors"];

function startGame() {
	gameBoard.innerHTML = `<div id="mainBoard">
		<div id="playerBox">
			<h3>Choose: </h3>
			<button type="button" class="optionBtn" data-value="rock"><span>Rock</span></button>
			<button type="button" class="optionBtn" data-value="paper">Paper</button>
			<button type="button" class="optionBtn" data-value="scissors">Scissors</button>
		</div>
		<div id="vsText">Vs</div>
		<div id="comBox"></div>
		<div id="resultDiv"></div>
	</div>`;

	document.querySelectorAll(".optionBtn").forEach(button => {
		button.addEventListener("click", handleInput);
	});
}

function handleInput() {
	document.querySelector("#playerBox").innerHTML = this.dataset.value;

	const comMove = moves[Math.floor(Math.random() * 3)];
	document.querySelector("#comBox").innerHTML = comMove;

	getResults(this.dataset.value, comMove);
}

function getResults(playerMove, comMove) {
	let playerWin = false;
	let comWin = false;

	if (playerMove.toLowerCase() === "rock" && comMove.toLowerCase() === "scissors") playerWin = true;
	if (playerMove.toLowerCase() === "paper" && comMove.toLowerCase() === "rock") playerWin = true;
	if (playerMove.toLowerCase() === "scissors" && comMove.toLowerCase() === "paper") playerWin = true;

	if (comMove.toLowerCase() === "rock" && playerMove.toLowerCase() === "scissors") comWin = true;
	if (comMove.toLowerCase() === "paper" && playerMove.toLowerCase() === "rock") comWin = true;
	if (comMove.toLowerCase() === "scissors" && playerMove.toLowerCase() === "paper") comWin = true;

	const resultDiv = document.querySelector("#resultDiv");

	if (playerWin) {
		resultDiv.innerText = "Player Wins!";
	} else if (comWin) {
		resultDiv.innerText = "COM Wins!";
	} else {
		resultDiv.innerText = "Draw!";
	}

	resultDiv.innerHTML += `<button onclick="startGame()">Restart</button>`;
}

startGame();