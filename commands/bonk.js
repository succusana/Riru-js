const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bonk')
		.setDescription('Bonk someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to bonk') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const interFiles = [
			'https://cdn.discordapp.com/attachments/930527017793888257/930527106604077087/unknown.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527106956427344/unknown_5.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527107463905340/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527107744931880/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527108315353148/unknown_2.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		if (interTarget === clientId) {
			const selfInterResponse = Math.floor(Math.random() * 1);
			if (selfInterResponse === 1) {
				const interEmbed = new MessageEmbed()
					.setColor('#FF0000')
					.setTitle('You attempt to bonk Riru, but-')
					.setDescription('*Counter!*\n***虚空陣奥義 悪滅!***')
					.setImage('https://cdn.discordapp.com/attachments/930527017793888257/930527108885803088/unknown_1.gif');
				await interaction.reply({ embeds: [interEmbed] });
				return;
			}
			else {
				const interEmbed = new MessageEmbed()
					.setColor('#FF0000')
					.setTitle('You attempt to bonk Riru, but-')
					.setDescription('***TECH BONUS***\n*Let\'s go Justin!*')
					.setImage('https://cdn.discordapp.com/attachments/930527017793888257/974352700890308618/ezgif.com-gif-maker2.gif');
				await interaction.reply({ embeds: [interEmbed] });
				return;
			}

		}
		else {
			const interEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> bonks <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> bonks <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}
		}
	},
};
