const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greets the user!'),
	async execute(interaction) {
		const helloEmbed = new MessageEmbed()
			.setcolor('#FFC0CB')
			.setdescription(`Hihi <@${interaction.user.id}>!`)
			.setimage('https://cdn.discordapp.com/attachments/924631967771795516/924631985878597663/unknown.gif');
		await interaction.reply({ embeds: [helloEmbed] });
	},
};
