const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kill someone! ...Probably.')
		.addUserOption(option => option.setName('target') .setDescription('Who to kill') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const killFiles = [
			'https://cdn.discordapp.com/attachments/977284307301306409/977284353270890506/aqua-cry-cute-aqua.gif',
			'https://cdn.discordapp.com/attachments/977284307301306409/977284353514168410/anime-cry.gif',
			'https://cdn.discordapp.com/attachments/977284307301306409/977529226817310810/1.gif',
			'https://cdn.discordapp.com/attachments/977284307301306409/977530616012763177/sad-cry.gif',
		];
		const chosenKill = killFiles[Math.floor(Math.random() * killFiles.length)] ;
		// Preparing target and sender for message.
		const killSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;

		const killEmbed = new MessageEmbed()
			.setColor(`${roleColor}`)
			.setTitle('No killing people!')
			.setDescription(`<@${killSender}>, killing people is bad! You wouldn't do that... Right...?`)
			.setImage(`${chosenKill}`);

		await interaction.reply({ embeds: [killEmbed] });
	},
};
