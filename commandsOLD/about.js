const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About Riru'),
	async execute(interaction) {
		// Prepare embed for sending.
		const aboutEmbed = new MessageEmbed()
			.setColor('#FFC0CB')
			.setTitle('Riru')
			.setAuthor('By Sana#2283')
			// WHY IS THIS HARDCODED. FETCH THE AVATAR AUTOMATICALLY AND PASS IT HERE
			.setThumbnail('https://cdn.discordapp.com/attachments/924613221627854909/930915390639444018/riru.png')
			.setURL('https://github.com/succusana/Riru-js')
			.setDescription('Riru is a Discord bot specialising in interaction commands.');

		await interaction.reply({ embeds: [aboutEmbed] });
	},
};
