const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat')
		.setDescription('Pat someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to pat') .setRequired(true)),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const patFiles = [
			'https://cdn.discordapp.com/attachments/924380716614164530/924391169801216101/unknown_5.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391170233221160/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391170489069639/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391170820431902/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391171281813514/a.gif',
		];
		const chosenPat = patFiles[Math.floor(Math.random() * patFiles.length)] ;
		const selfPat = 'https://cdn.discordapp.com/attachments/924380716614164530/924392238262390794/unknown.gif';
		// Preparing target and sender for message.
		const patTarget = interaction.options.getUser('target') + '';
		const patSender = interaction.user.id;
		if (patTarget === clientId) {
			const patEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setDescription('You\'re patting me instead...?\n*Riru blushes but leans into the pat, letting you rub her soft hair for a bit.*')
				.setImage(`${selfPat}`);
			await interaction.reply({ embeds: [patEmbed] });
		}
		else {
			console.log(`Target is ${patTarget}, not <@923637342219157564>.`);
			const patEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${patSender}> hugs <@${patTarget}>!`)
				.setImage(`${chosenPat}`);

			await interaction.reply({ embeds: [patEmbed] });
		}
	},
};