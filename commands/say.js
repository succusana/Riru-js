const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Get Riru to say something!')
		.addStringOption(option => option.setName('input') .setDescription('What to say') .setRequired(true)),
	async execute(interaction) {
		const saystring = interaction.options.getString('input');
		await interaction.reply(saystring);
	},
};
