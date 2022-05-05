const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('smug')
		.setDescription('Get smug!')
		.addUserOption(option => option.setName('target') .setDescription('Who to get smug at') .setRequired(false))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const smugFiles = [
			'https://cdn.discordapp.com/attachments/926208444166459483/926209358172422214/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926209358885433384/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926209359359406211/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926564174497198111/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926209360093397062/6a1dd77b-d882-4f94-a14a-5a6ef4cc52e5.gif',
		];
		const chosenSmug = smugFiles[Math.floor(Math.random() * smugFiles.length)] ;
		const selfSmug = 'https://cdn.discordapp.com/attachments/926208444166459483/926209889192267827/unknown.gif';
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');
		// Preparing target and sender for message.
		const smugSender = interaction.user.id;
		if (interaction.options.getUser('target') === null) {
			const smugEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${smugSender}> gets smug!`)
				.setImage(`${chosenSmug}`);

			await interaction.reply({ embeds: [smugEmbed] });
		}
		else {
			const smugTarget = interaction.options.getUser('target') + '';
			if (smugTarget === clientId) {
				const smugEmbed = new MessageEmbed()
					.setColor('#FFC0CB')
					.setTitle('You get smug at Riru!')
					.setDescription('Don\'t look at me like that! Uuuuu...')
					.setImage(`${selfSmug}`);

				await interaction.reply({ embeds: [smugEmbed] });
			}
			else {
				const smugEmbed = new MessageEmbed()
					.setColor(`${roleColor}`)
					.setDescription(`<@${smugSender}> smugs at <@${smugTarget}>!`)
					.setImage(`${chosenSmug}`);
				if (pingOption == 'yes') {
					await interaction.reply(`<@${smugSender}> smugs at <@${smugTarget}>!`);
					await interaction.editReply('­  ­­');
					await interaction.editReply({ embeds: [smugEmbed] });
				}
				else {
					await interaction.reply({ embeds: [smugEmbed] });
				}
			}
		}
	},
};
