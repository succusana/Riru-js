const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat')
		.setDescription('Pat someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to pat') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const interFiles = [
			'https://cdn.discordapp.com/attachments/924380716614164530/924391169801216101/unknown_5.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391170233221160/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391170489069639/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391170820431902/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/924380716614164530/924391171281813514/a.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/924380716614164530/924392238262390794/unknown.gif';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');
		if (interTarget === clientId) {
			const interEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets patted!')
				.setDescription('You\'re patting me instead...?\n*Riru blushes but leans into the pat, letting you rub her soft hair for a bit.*')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> pats <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> pats <@${interTarget}>!`);
				await interaction.editReply('??????????');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}

		}
	},
};
