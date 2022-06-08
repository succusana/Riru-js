const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Boop someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to boop') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const interFiles = [
			'https://cdn.discordapp.com/attachments/933657078105505852/933657165409976321/unknown.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657165682581524/unknown_5.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657166152347669/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657166399819816/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657166789902386/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657167217713152/unknown_1.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/933657078105505852/933660964849602580/unknown.gif';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		if (interTarget === clientId) {
			const interEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets booped!')
				.setDescription('*The boop ends up making her rather flustered.*')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> boops <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> boops <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}
		}
	},
};
