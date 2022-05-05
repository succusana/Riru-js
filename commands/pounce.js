const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pounce')
		.setDescription('Pounce on someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to pounce on') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const pounceFiles = [
			'https://cdn.discordapp.com/attachments/931633984205635695/931634045081747486/unknown.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634045803180043/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634046176493728/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634046834966568/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/964936917546332260/surprise-hugs-hug.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/964936917978333244/animes-anime.gif',
		];
		const chosenPounce = pounceFiles[Math.floor(Math.random() * pounceFiles.length)] ;
		// Preparing target and sender for message.
		const pounceTarget = interaction.options.getUser('target') + '';
		const pounceSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

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
				.setColor(`${roleColor}`)
				.setDescription(`<@${pounceSender}> pounces on <@${pounceTarget}>!`)
				.setImage(`${chosenPounce}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${pounceSender}> pounces <@${pounceTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [pounceEmbed] });
			}
			else {
				await interaction.reply({ embeds: [pounceEmbed] });
			}
		}
	},
};
