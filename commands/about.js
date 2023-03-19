const { client, EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const { ownerId, clientId } = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About Riru'),
	async execute(interaction) {
		// Prepare embed for sending.
		const selfName = interaction.client.user.username;
		const selfAvatar = interaction.client.user.displayAvatarURL();
		const ownerName = `@${ownerId}`
		const aboutEmbed = new EmbedBuilder()
			.setColor('#FFC0CB')
			.setTitle(`${selfName}`)
			.setThumbnail(`${selfAvatar}`)
			.setURL('https://github.com/succusana/Riru-js')
			.setDescription('Riru is a Discord bot specialising in interaction commands.');

		await interaction.reply({ embeds: [aboutEmbed] });
	},
};
