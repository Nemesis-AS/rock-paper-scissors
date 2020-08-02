const gameBoard = document.querySelector("#board");

const moves = ["rock", "paper", "scissors"];

function startGame() {
	gameBoard.innerHTML = `<div id="mainBoard">
		<div id="playerBox">
			<h3>Choose: </h3>
			<button type="button" class="optionBtn font-huge" data-value="rock"><i class="fas fa-hand-rock"></i></button>
			<button type="button" class="optionBtn font-huge" data-value="paper"><i class="fas fa-hand-paper"></i></button>
			<button type="button" class="optionBtn font-huge" data-value="scissors"><i class="fas fa-hand-scissors"></i></button>
		</div>
		<div id="vsText"><div class="text-box">Vs</div></div>
		<div id="comBox"></div>
		<div id="resultDiv"></div>
	</div>`;

	document.querySelectorAll(".optionBtn").forEach(button => {
		button.addEventListener("click", handleInput);
	});
}

function handleInput() {
	document.querySelector("#playerBox").innerHTML = `<div><i class="font-huge fas fa-hand-${this.dataset.value}"></i></div><p class="text-center font-med">${this.dataset.value}</p>`;

	const comMove = moves[Math.floor(Math.random() * 3)];
	document.querySelector("#comBox").innerHTML = `<div><i class="font-huge fas fa-hand-${comMove}"></i></div><p class="text-center font-med">${comMove}</p>`;

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