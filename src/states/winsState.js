// contador de victorias p1,p2
export const winsState = {
	wins: [0, 0], // [victorias P1, victorias P2]
};

export const registerWin = (playerId) => {
	winsState.wins[playerId] += 1;
};

export const getLeaderText = () => {
	const [p1, p2] = winsState.wins;
	if (p1 === p2) return 'EMPATE';
	return p1 > p2 ? 'P1 VA GANANDO' : 'P2 VA GANANDO';
};

// dibuja el marcador
export const drawWinsCounter = (context, y = 52) => {
	const [p1, p2] = winsState.wins;
	context.save();
	context.font = 'bold 10px Arial';
	context.textAlign = 'center';
	context.lineWidth = 3;
	context.strokeStyle = 'black';
	const text = `VICTORIAS  P1: ${p1}  -  P2: ${p2}   (${getLeaderText()})`;
	context.strokeText(text, 191, y);
	context.fillStyle = p1 === p2 ? 'white' : '#f3f300';
	context.fillText(text, 191, y);
	context.restore();
};
