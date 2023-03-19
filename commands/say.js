const { SlashCommandBuilder } = require('discord.js');
const { ownerId, alterId } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Get Riru to say something!')
		.addStringOption(option => option.setName('input') .setDescription('What to make Riru say') .setRequired(true)),
	async execute(interaction) {
		const saystring = interaction.options.getString('input');
		if (interaction.user.id === ownerId) {
			await interaction.reply(saystring);
			return;
		}
		else if (interaction.user.id === alterId) {
			await interaction.reply(saystring);
			return;
		}
		else {
			await interaction.reply({ content: 'You can\'t tell me what to do, hmph! (You are not permitted to use this command.)', ephemeral: true });
		}
	},
};
