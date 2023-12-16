const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greets the user!'),

	async execute(interaction) {

		const target = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const interFiles = [
			'https://media1.tenor.com/m/ywCocDUt31QAAAAC/anime-wave.gif'
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;

		const interEmbed = new EmbedBuilder()
			.setColor(`${roleColor}`)
			.setDescription(`Hihi <@${target}>!`)
			.setImage(`${chosenInter}`);

		await interaction.reply({ embeds: [interEmbed] });

	},
};