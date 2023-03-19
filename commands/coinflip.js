const { EmbedBuilder, SlashCommandBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flip a coin!'),

	async execute(interaction) {

		// Flip the coin! ...In code.
		const coinMath = Math.round(Math.random());
		const coinResult = (coinMath === 1) ? 'Heads' : 'Tails';

		// Prepare variables for response.
		const interSender = interaction.user.username;
		const usedGif = 'https://cdn.discordapp.com/attachments/986925962933448704/986926008563286036/anime-wow.gif';

		const interEmbed = new EmbedBuilder()
			.setColor('#FFC0CB')
			.setTitle(`${interSender} flips a coin!`)
			.setDescription(`*And the result is...* \n ***${coinResult}!***`)
			.setImage(`${usedGif}`);
		await interaction.reply({ embeds: [interEmbed] });
	},
};