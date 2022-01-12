module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Riru is now online! Logged in as ${client.user.tag}`);
	},
};
