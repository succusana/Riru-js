const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greets the user!'),
	async execute(interaction) {
		const target = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const interFiles = [
			'https://cdn.discordapp.com/attachments/924631967771795516/924631985878597663/unknown.gif',
			'https://cdn.discordapp.com/attachments/924631967771795516/985474868785074186/wave-anime.gif?size=4096',
			'https://cdn.discordapp.com/attachments/924631967771795516/985474869032525824/anime-wave.gif?size=4096',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const interEmbed = new MessageEmbed()
			.setColor(`${roleColor}`)
			.setDescription(`Hihi <@${target}>!`)
			.setImage(`${chosenInter}`);
		await interaction.reply({ embeds: [interEmbed] });
	},
};
