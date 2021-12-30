const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About Riru'),
	async execute(interaction) {

		const aboutEmbed = new MessageEmbed()
			.setColor('#FFC0CB')
			.setTitle('Riru')
			.setAuthor('By Sana#2283')
			.setThumbnail('https://cdn.discordapp.com/attachments/626416992642924577/923669123387490384/ari.png')
			.setURL('https://github.com/succusana/Riru-js')
			.setDescription('Riru is a Discord bot specialising in interaction commands.');

		await interaction.reply({ embeds: [aboutEmbed] });
	},
};
