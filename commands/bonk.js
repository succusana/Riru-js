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
		const bonkFiles = [
			'https://cdn.discordapp.com/attachments/930527017793888257/930527106604077087/unknown.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527106956427344/unknown_5.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527107463905340/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527107744931880/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/930527017793888257/930527108315353148/unknown_2.gif',
		];
		const chosenBonk = bonkFiles[Math.floor(Math.random() * bonkFiles.length)] ;
		const selfBonk = 'https://cdn.discordapp.com/attachments/930527017793888257/930527108885803088/unknown_1.gif';
		// Preparing target and sender for message.
		const bonkTarget = interaction.options.getUser('target') + '';
		const bonkSender = interaction.user.id;
		const pingOption = interaction.options.getString('mention');

		if (bonkTarget === clientId) {
			const bonkEmbed = new MessageEmbed()
				.setColor('#FF0000')
				.setTitle('You attempt to bonk Riru, but-')
				.setDescription('*Counter!*\n***虚空陣奥義 悪滅!***')
				.setImage(`${selfBonk}`);
			await interaction.reply({ embeds: [bonkEmbed] });
		}
		else {
			const bonkEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${bonkSender}> bonks <@${bonkTarget}>!`)
				.setImage(`${chosenBonk}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${bonkSender}> bonks <@${bonkTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [bonkEmbed] });
			}
			else {
				await interaction.reply({ embeds: [bonkEmbed] });
			}
		}
	},
};
