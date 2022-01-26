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
		const makeoFiles = [
			'https://cdn.discordapp.com/attachments/924604377103208510/924605010258575360/tumblr_n8tnsfbJik1rrr564o2_r1_500.gif',
			'https://cdn.discordapp.com/attachments/924604377103208510/924605010610888794/200.gif',
			'https://cdn.discordapp.com/attachments/924604377103208510/924606823946919986/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/924604377103208510/924606824248926228/unknown_1.gif',
		];
		const chosenMakeO = makeoFiles[Math.floor(Math.random() * makeoFiles.length)] ;
		const selfMakeO = 'https://cdn.discordapp.com/attachments/924604377103208510/924607998649851934/unknown_1.gif';
		// Preparing target and sender for message.
		const makeoTarget = interaction.options.getUser('target') + '';
		const makeoSender = interaction.user.id;
		const pingOption = interaction.options.getString('mention');

		if (makeoTarget === clientId) {
			const makeoEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('You attempt to make out with Riru, but...')
				.setDescription('Wait, you expect me to do *that?*')
				.setImage(`${selfMakeO}`);
			await interaction.reply({ embeds: [makeoEmbed] });
		}
		else {
			const makeoEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${makeoSender}> makes out with <@${makeoTarget}>...? Lewd!`)
				.setImage(`${chosenMakeO}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${makeoSender}> makes out with <@${makeoTarget}>...? Lewd!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [makeoEmbed] });
			}
			else {
				await interaction.reply({ embeds: [makeoEmbed] });
			}

		}
	},
};
