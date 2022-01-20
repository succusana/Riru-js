const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Boop someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to boop') .setRequired(true)),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const boopFiles = [
			'https://cdn.discordapp.com/attachments/933657078105505852/933657165409976321/unknown.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657165682581524/unknown_5.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657166152347669/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657166399819816/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657166789902386/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/933657078105505852/933657167217713152/unknown_1.gif',
		];
		const chosenBoop = boopFiles[Math.floor(Math.random() * boopFiles.length)] ;
		const selfBoop = 'https://cdn.discordapp.com/attachments/933657078105505852/933660964849602580/unknown.gif';
		// Preparing target and sender for message.
		const boopTarget = interaction.options.getUser('target') + '';
		const boopSender = interaction.user.id;
		if (boopTarget === clientId) {
			const boopEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets booped!')
				.setDescription('*The boop ends up making her rather flustered.*')
				.setImage(`${selfBoop}`);
			await interaction.reply({ embeds: [boopEmbed] });
		}
		else {
			const boopEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${boopSender}> boops <@${boopTarget}>!`)
				.setImage(`${chosenBoop}`);

			await interaction.reply({ embeds: [boopEmbed] });
		}
	},
};
