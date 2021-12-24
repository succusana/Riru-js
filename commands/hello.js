const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greets the user!'),
	async execute(interaction) {
		await interaction.reply(`Hihi <@${interaction.user.id}>!`);
	},
};
