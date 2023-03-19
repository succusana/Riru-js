const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kill someone! ...Probably.')
		.addUserOption(option => option.setName('target') .setDescription('Who to kill') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoices(
					{ name: 'Yes', value: 'yes' },
					{ name: 'No', value: 'no' },
				)
			),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const interFiles = [
			'https://cdn.discordapp.com/attachments/977284307301306409/977284353270890506/aqua-cry-cute-aqua.gif',
			'https://cdn.discordapp.com/attachments/977284307301306409/977284353514168410/anime-cry.gif',
			'https://cdn.discordapp.com/attachments/977284307301306409/977529226817310810/1.gif',
			'https://cdn.discordapp.com/attachments/977284307301306409/977530616012763177/sad-cry.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		// Preparing target and sender for message.
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;

		const interEmbed = new EmbedBuilder()
			.setColor(`${roleColor}`)
			.setTitle('No killing people!')
			.setDescription(`<@${interSender}>, killing people is bad! You wouldn't do that... Right...?`)
			.setImage(`${chosenInter}`);

		await interaction.reply({ embeds: [interEmbed] });
	},
};
