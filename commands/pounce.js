const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pounce')
		.setDescription('Pounce on someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to pounce on') .setRequired(true)),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const pounceFiles = [
			'https://cdn.discordapp.com/attachments/931633984205635695/931634045081747486/unknown.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634045803180043/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634046176493728/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634046834966568/unknown_1.gif',
		];
		const chosenPounce = pounceFiles[Math.floor(Math.random() * pounceFiles.length)] ;
		// Preparing target and sender for message.
		const pounceTarget = interaction.options.getUser('target') + '';
		const pounceSender = interaction.user.id;
		if (pounceTarget === clientId) {
			const pounceEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets pounced!')
				.setDescription('Uwa!')
				.setImage(`${chosenPounce}`);
			await interaction.reply({ embeds: [pounceEmbed] });
		}
		else {
			const pounceEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${pounceSender}> pounces on <@${pounceTarget}>!`)
				.setImage(`${chosenPounce}`);

			await interaction.reply({ embeds: [pounceEmbed] });
		}
	},
};
