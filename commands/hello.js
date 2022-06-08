const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greets the user!'),
	async execute(interaction) {
		const target = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const interEmbed = new MessageEmbed()
			.setColor(`${roleColor}`)
			.setDescription(`Hihi <@${target}>!`)
			.setImage('https://cdn.discordapp.com/attachments/924631967771795516/924631985878597663/unknown.gif');
		await interaction.reply({ embeds: [interEmbed] });
	},
};
