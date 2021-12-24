const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to hug') .setRequired(true)),
	async execute(interaction) {
		const hugtarget = interaction.options.getUser('target') + '';
		const hugsender = interaction.user.id;
		console.log(`${hugsender} hugs ${hugtarget}`);
		if (hugtarget === clientId) {
			await interaction.reply('Wait-!\n*Riru accepts the hug, blushing a fair bit but hugging back gently.*');
		}
		else {
			console.log(`Target is ${hugtarget}, not <@923637342219157564>.`);
			await interaction.reply(`<@${hugsender}> hugs ${hugtarget}!`);
		}
	},
};
