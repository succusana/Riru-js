const { SlashCommandBuilder } = require('@discordjs/builders');
const { clientId } = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Kiss someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to kiss') .setRequired(true)),

	async execute(interaction) {
		// Choose random gif to add to reply.
		const kissFiles = [
			'https://cdn.discordapp.com/attachments/924603816781959218/924603885568548894/unknown.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603886126374922/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603886612910100/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603886881374268/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603887380484156/KanD.gif',
		];
		const chosenKiss = kissFiles[Math.floor(Math.random() * kissFiles.length)] ;
		const selfKiss = 'https://cdn.discordapp.com/attachments/924603816781959218/924605389650137098/unknown.gif';
		// Preparing target and sender for message.
		const kissTarget = interaction.options.getUser('target') + '';
		const kissSender = interaction.user.id;
		if (kissTarget === clientId) {
			const kissEmbed = new MessageEmbed()
				.setColor('#FFC0CB')
				.setTitle('Riru gets kissed!')
				.setDescription('Mmh~?!')
				.setImage(`${selfKiss}`);
			await interaction.reply({ embeds: [kissEmbed] });
		}
		else {
			const kissEmbed = new MessageEmbed()
				.setColor('#8F3BCB')
				.setDescription(`<@${kissSender}> kisses <@${kissTarget}>!`)
				.setImage(`${chosenKiss}`);

			await interaction.reply({ embeds: [kissEmbed] });
		}
	},
};
