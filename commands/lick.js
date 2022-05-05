const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lick')
		.setDescription('Lick someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to lick') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const lickFiles = [
			'https://cdn.discordapp.com/attachments/944901814761959424/944902307299078185/unknown.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902307630432336/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902307991150662/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902308309905458/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902308809023538/25D025B025D025BD25D025B825D025BC25D025B5-darling-in-the-franxx.gif',
		];
		const chosenLick = lickFiles[Math.floor(Math.random() * lickFiles.length)] ;
		const selfLick = 'https://cdn.discordapp.com/attachments/944901814761959424/944903078077939742/unknown_4.gif';
		// Preparing target and sender for message.
		const lickTarget = interaction.options.getUser('target') + '';
		const lickSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		// Mentioning target if requested.
		const pingOption = interaction.options.getString('mention');

		// Preparing and sending embed.
		if (lickTarget === clientId) {
			const lickEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets licked!')
				.setDescription('Wha-!\n*Riru blushes heavily from the lick!*')
				.setImage(`${selfLick}`);
			await interaction.reply({ embeds: [lickEmbed] });
		}
		else {
			const lickEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${lickSender}> licks <@${lickTarget}>!`)
				.setImage(`${chosenLick}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${lickSender}> licks <@${lickTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [lickEmbed] });
			}
			else {
				await interaction.reply({ embeds: [lickEmbed] });
			}

		}
	},
};
