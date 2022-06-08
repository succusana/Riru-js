const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cuddle')
		.setDescription('Cuddle someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to cuddle') .setRequired(true))
		.addStringOption(option =>
			option.setName('mention')
				.setDescription('Ping the user?')
				.setRequired(false)
				.addChoice('Yes', 'yes')
				.addChoice('No', 'no')),
	async execute(interaction) {
		// Choose random gif to add to reply.
		const interFiles = [
			'https://cdn.discordapp.com/attachments/930528834548273215/930528875195289641/cuddle.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529887930966066/unknown.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529888513978408/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529888975347803/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529889394753576/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529889809993748/unknown_1.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/930528834548273215/930531895320670258/mp4.gif';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		if (interTarget === clientId) {
			const interEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru decides to cuddle you instead!')
				.setDescription('Warm...\n*She\'s clearly not letting go any time soon.*')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new MessageEmbed()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> cuddles <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> cuddles <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}
		}
	},
};
