const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('grouphug')
		.setDescription('Hug two people at once!')
		.addUserOption(option => option.setName('target') .setDescription('Who to hug') .setRequired(true))
		.addUserOption(option => option.setName('target2') .setDescription('Who to also hug') .setRequired(true)),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const hugFiles = [
			'https://cdn.discordapp.com/attachments/931090439354871818/931090542555705364/unknown.gif',
			'https://cdn.discordapp.com/attachments/931090439354871818/931090542832533534/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/931090439354871818/931090543499436032/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/931090439354871818/931090543772074025/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/931090439354871818/931090544518656000/unknown_4.gif',
		];
		const chosenHug = hugFiles[Math.floor(Math.random() * hugFiles.length)] ;
		// Preparing target and sender for message.
		const hugTarget = interaction.options.getUser('target') + '';
		const hugTarget2 = interaction.options.getUser('target2') + '';
		const hugSender = interaction.user.id;
		const hugEmbed = new MessageEmbed()
			.setColor('#8F3BCB')
			.setDescription(`<@${hugSender}> hugs <@${hugTarget}> *and* <@${hugTarget2}>!`)
			.setImage(`${chosenHug}`);
		await interaction.reply({ embeds: [hugEmbed] });
	},
};
