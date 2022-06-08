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
		const interFiles = [
			'https://cdn.discordapp.com/attachments/931633984205635695/931634045081747486/unknown.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634045803180043/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634046176493728/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/931634046834966568/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/964936917546332260/surprise-hugs-hug.gif',
			'https://cdn.discordapp.com/attachments/931633984205635695/964936917978333244/animes-anime.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		if (interTarget === clientId) {
			const interEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets pounced!')
				.setDescription('Uwa!')
				.setImage(`${chosenInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> pounces on <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> pounces <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}
		}
	},
};
