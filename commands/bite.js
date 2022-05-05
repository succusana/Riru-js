const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bite')
		.setDescription('Bite someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to bite') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const biteFiles = [
			'https://cdn.discordapp.com/attachments/929832960436371496/930188461871349800/unknown.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188462156550186/unknown_copy_1.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188462429175808/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188462739587154/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188463003807764/unknown_1_copy_1.gif',
		];
		const chosenBite = biteFiles[Math.floor(Math.random() * biteFiles.length)] ;
		const selfBite = 'https://cdn.discordapp.com/attachments/929832960436371496/930189526809317376/unknown.gif';
		// Preparing target and sender for message.
		const biteTarget = interaction.options.getUser('target') + '';
		const biteSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');
		if (biteTarget === clientId) {
			const biteEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setDescription('*Riru flees before you get to bite her!*')
				.setImage(`${selfBite}`);
			await interaction.reply({ embeds: [biteEmbed] });
		}
		else {
			const biteEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${biteSender}> bites <@${biteTarget}>!`)
				.setImage(`${chosenBite}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${biteSender}> bites <@${biteTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [biteEmbed] });
			}
			else {
				await interaction.reply({ embeds: [biteEmbed] });
			}
		}
	},
};
