const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('diceroll')
		.setDescription('Roll the Dice!')
		.addIntegerOption(option => option.setName('minimum') .setDescription('minimum value') .setRequired(true))
		.addIntegerOption(option =>
			option.setName('maximum')
				.setDescription('maximum value')
				.setRequired(true)),
	async execute(interaction) {

		// Roll the dice, virtually!
		const interMinVal = interaction.options.getInteger('minimum');
		const interMaxVal = interaction.options.getInteger('maximum');
		function randomIntFromInterval(min, max) {
			return Math.round(Math.random() * (max - min + 1) + min);
		}

		const diceResult = (randomIntFromInterval(interMinVal, interMaxVal));

		// Prepare variables for response.
		const interSender = interaction.user.username;
		const usedGif = 'https://cdn.discordapp.com/attachments/986925962933448704/1005924070749114389/ezgif.com-gif-maker.gif';

		const interEmbed = new MessageEmbed()
			.setColor('#FFC0CB')
			.setTitle(`${interSender} rolls the dice (from ${interMinVal} to ${interMaxVal})!`)
			.setDescription(`*And the result is...* \n ***${diceResult}!***`)
			.setImage(`${usedGif}`);
		await interaction.reply({ embeds: [interEmbed] });
	},
};