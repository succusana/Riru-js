const { clientId } = require('../config.json');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('smug')
		.setDescription('Get smug!')
		.addUserOption(option => option.setName('target') .setDescription('Who to get smug at') .setRequired(false))
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
			'https://cdn.discordapp.com/attachments/926208444166459483/926209358172422214/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926209358885433384/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926209359359406211/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926564174497198111/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/926209360093397062/6a1dd77b-d882-4f94-a14a-5a6ef4cc52e5.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/1014468945824206908/nao-tomori.gif',
			'https://cdn.discordapp.com/attachments/926208444166459483/1014471317879279626/ezgif.com-gif-maker1.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/926208444166459483/926209889192267827/unknown.gif';
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');
		// Preparing target and sender for message.
		const interSender = interaction.user.id;
		if (interaction.options.getUser('target') === null) {
			const interEmbed = new EmbedBuilder()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> gets smug!`)
				.setImage(`${chosenInter}`);

			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interTarget = interaction.options.getUser('target') + '';
			if (interTarget === clientId) {
				const interEmbed = new EmbedBuilder()
					.setColor('#FFC0CB')
					.setTitle('You get smug at Riru!')
					.setDescription('Don\'t look at me like that! Uuuuu...')
					.setImage(`${selfInter}`);

				await interaction.reply({ embeds: [interEmbed] });
			}
			else {
				const interEmbed = new EmbedBuilder()
					.setColor(`${roleColor}`)
					.setDescription(`<@${interSender}> smugs at <@${interTarget}>!`)
					.setImage(`${chosenInter}`);
				if (pingOption == 'yes') {
					await interaction.reply(`<@${interSender}> smugs at <@${interTarget}>!`);
					await interaction.editReply('­  ­­');
					await interaction.editReply({ embeds: [interEmbed] });
				}
				else {
					await interaction.reply({ embeds: [interEmbed] });
				}
			}
		}
	},
};
