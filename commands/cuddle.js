const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cuddle')
		.setDescription('Cuddle someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to cuddle') .setRequired(true)),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const cuddleFiles = [
			'https://cdn.discordapp.com/attachments/930528834548273215/930528875195289641/cuddle.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529887930966066/unknown.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529888513978408/unknown_4.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529888975347803/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529889394753576/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/930528834548273215/930529889809993748/unknown_1.gif',
		];
		const chosenCuddle = cuddleFiles[Math.floor(Math.random() * cuddleFiles.length)] ;
		const selfCuddle = 'https://cdn.discordapp.com/attachments/930528834548273215/930531895320670258/mp4.gif';
		// Preparing target and sender for message.
		const cuddleTarget = interaction.options.getUser('target') + '';
		const cuddleSender = interaction.user.id;
		if (cuddleTarget === clientId) {
			const cuddleEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru decides to cuddle you instead!')
				.setDescription('Warm...\n*She\'s clearly not letting go any time soon.*')
				.setImage(`${selfCuddle}`);
			await interaction.reply({ embeds: [cuddleEmbed] });
		}
		else {
			const cuddleEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${cuddleSender}> cuddles <@${cuddleTarget}>!`)
				.setImage(`${chosenCuddle}`);

			await interaction.reply({ embeds: [cuddleEmbed] });
		}
	},
};
