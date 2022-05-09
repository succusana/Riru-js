const { SlashCommandBuilder } = require('@discordjs/builders');
const { ownerid, alterid } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Get Riru to say something!')
		.addStringOption(option => option.setName('input') .setDescription('What to say') .setRequired(true)),
	async execute(interaction) {
		const saystring = interaction.options.getString('input');
		if (interaction.user.id === ownerid) {
			await interaction.reply(saystring);
			return;
		}
		else if (interaction.user.id === alterid) {
			await interaction.reply(saystring);
			return;
		}
		else {
			await interaction.reply({ content: 'You can\'t tell me what to do! (You are not permitted to use this command.)', ephemeral: true });
		}
	},
};
