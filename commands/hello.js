const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greets the user!'),
	async execute(interaction) {
		const helloEmbed = new MessageEmbed()
			.setColor('#FFC0CB')
			.setDescription(`Hihi <@${interaction.user.id}>!`)
			.setImage('https://cdn.discordapp.com/attachments/924631967771795516/924631985878597663/unknown.gif');
		await interaction.reply({ embeds: [helloEmbed] });
	},
};
