const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('handhold')
		.setDescription('Hold someone\'s hand!')
		.addUserOption(option => option.setName('target') .setDescription('Whose hand to hold') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const interFiles = [
			'https://cdn.discordapp.com/attachments/987061314339893299/987061399933042770/love-holding-hands.gif',
			'https://cdn.discordapp.com/attachments/987061314339893299/987061400272797716/asthetic-anime.gif?size=4096',
			'https://cdn.discordapp.com/attachments/987061314339893299/987061400524435526/anime.gif?size=4096',
			'https://cdn.discordapp.com/attachments/987061314339893299/987061400805441626/anime-hand.gif?size=4096',

		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/987061314339893299/987061401317154856/anime-girl.gif?size=4096';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		// Mentioning target if requested.
		const pingOption = interaction.options.getString('mention');

		// Preparing and sending embed.
		if (interTarget === clientId) {
			const interEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('You try to hold Riru\'s hand...')
				.setDescription('I-I\'m sorry! I don\'t like you that way yet! \n *Seems like she can\'t handle the pressure.')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> holds <@${interTarget}>'s hand!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> holds <@${interTarget}>'s hand!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}

		}
	},
};
