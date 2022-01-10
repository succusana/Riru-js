const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bite')
		.setDescription('Bite someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to bite') .setRequired(true)),

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
		if (biteTarget === clientId) {
			const biteEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setDescription('*Riru flees before you get to bite her!*')
				.setImage(`${selfBite}`);
			await interaction.reply({ embeds: [biteEmbed] });
		}
		else {
			const biteEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${biteSender}> bites <@${biteTarget}>!`)
				.setImage(`${chosenBite}`);

			await interaction.reply({ embeds: [biteEmbed] });
		}
	},
};
