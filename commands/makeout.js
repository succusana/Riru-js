const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('makeout')
		.setDescription('Kiss someone with a *lot* more passion.')
		.addUserOption(option => option.setName('target') .setDescription('Who to make love to') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const interFiles = [
			'https://cdn.discordapp.com/attachments/924604377103208510/973153658646716466/girl-kiss.gif',
			'https://cdn.discordapp.com/attachments/924604377103208510/924605010610888794/200.gif',
			'https://cdn.discordapp.com/attachments/924604377103208510/924606823946919986/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/924604377103208510/924606824248926228/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/924604377103208510/964935925543084112/kiss-making-out.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/924604377103208510/924607998649851934/unknown_1.gif';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		if (interTarget === clientId) {
			const interEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('You attempt to make out with Riru, but...')
				.setDescription('Wait, you expect me to do *that?*')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> makes out with <@${interTarget}>...? Lewd!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> makes out with <@${interTarget}>...? Lewd!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}

		}
	},
};
