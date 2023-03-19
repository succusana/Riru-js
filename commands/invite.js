const { SlashCommandBuilder } = require('discord.js');

// This command can probably just be put into /about.

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Invite Riru to your server!'),
	async execute(interaction) {
		await interaction.reply('Invite me to your server using this link! https://discord.com/oauth2/authorize?client_id=986692486300852244&permissions=51200&scope=bot%20applications.commands');
	},
};
