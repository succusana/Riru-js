const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pout')
		.setDescription('Pout!')
		.addUserOption(option => option.setName('target') .setDescription('Who to pout at') .setRequired(false))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const poutFiles = [
			'https://cdn.discordapp.com/attachments/926186290163093594/926186390897713182/unknown.gif',
			'https://cdn.discordapp.com/attachments/926186290163093594/926186391744946237/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/926186290163093594/926186392592216124/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/926186290163093594/926186393338806322/unknown_1.gif',
		];
		const chosenPout = poutFiles[Math.floor(Math.random() * poutFiles.length)] ;
		const selfPout = 'https://cdn.discordapp.com/attachments/926186290163093594/926186391329714226/unknown_4.gif';
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		// Preparing target and sender for message.
		const poutSender = interaction.user.id;
		if (interaction.options.getUser('target') === null) {
			const poutEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${poutSender}> pouts!`)
				.setImage(`${chosenPout}`);

			await interaction.reply({ embeds: [poutEmbed] });
		}
		else {
			const poutTarget = interaction.options.getUser('target') + '';
			if (poutTarget === clientId) {
				const poutEmbed = new MessageEmbed()
					.setColor('#FFC0CB')
					.setTitle('You pout at Riru!')
					.setDescription('Wait, what are you pouting at me for? Did I say something?')
					.setImage(`${selfPout}`);

				await interaction.reply({ embeds: [poutEmbed] });
			}
			else {
				const poutEmbed = new MessageEmbed()
					.setColor('#8F3BCB')
					.setDescription(`<@${poutSender}> pouts at <@${poutTarget}>!`)
					.setImage(`${chosenPout}`);
				if (pingOption == 'yes') {
					await interaction.reply(`<@${poutSender}> pouts at <@${poutTarget}>!`);
					await interaction.editReply('­  ­­');
					await interaction.editReply({ embeds: [poutEmbed] });
				}
				else {
					await interaction.reply({ embeds: [poutEmbed] });
				}
			}
		}
	},
};
