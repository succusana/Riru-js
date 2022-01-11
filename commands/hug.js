const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to hug') .setRequired(true)),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const hugFiles = [
			'https://cdn.discordapp.com/attachments/924373854044946433/924373913511813150/hug1.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373913016893440/hug2.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373912375148604/hug3.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373911800533112/hug5.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373911439814726/hug6.gif',
		];
		const chosenHug = hugFiles[Math.floor(Math.random() * hugFiles.length)] ;
		const selfHug = 'https://cdn.discordapp.com/attachments/924373854044946433/924378713632698368/hugself.gif';
		// Preparing target and sender for message.
		const hugTarget = interaction.options.getUser('target') + '';
		const hugSender = interaction.user.id;
		if (hugTarget === clientId) {
			const hugEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets hugged!')
				.setDescription('Wait-!\n*Riru accepts the hug, blushing a fair bit but hugging back gently.*')
				.setImage(`${selfHug}`);
			await interaction.reply({ embeds: [hugEmbed] });
		}
		else {
			const hugEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${hugSender}> hugs <@${hugTarget}>!`)
				.setImage(`${chosenHug}`);

			await interaction.reply({ embeds: [hugEmbed] });
		}
	},
};
