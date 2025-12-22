function greetPlayer(name) {
	const trimmed = typeof name === 'string' ? name.trim() : '';
	return `Hello, ${trimmed || 'Player'}!`;
}