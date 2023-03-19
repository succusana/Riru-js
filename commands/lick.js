const { clientId } = require('../config.json');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lick')
		.setDescription('Lick someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to lick') .setRequired(true))
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
			'https://cdn.discordapp.com/attachments/944901814761959424/944902307299078185/unknown.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902307630432336/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902307991150662/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902308309905458/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/944901814761959424/944902308809023538/25D025B025D025BD25D025B825D025BC25D025B5-darling-in-the-franxx.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041792706185281627/tumblr_motkj3708p1r9b5wlo1_r1_500.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041794087675768842/tumblr_olw3zbb98F1qa94xto1_500.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/944901814761959424/944903078077939742/unknown_4.gif';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		// Mentioning target if requested.
		const pingOption = interaction.options.getString('mention');

		// Preparing and sending embed.
		if (interTarget === clientId) {
			const interEmbed = new EmbedBuilder()
				.setColor('#FFC0CB')
				.setTitle('Riru gets licked!')
				.setDescription('Wha-!\n*Riru blushes heavily from the lick!*')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new EmbedBuilder()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> licks <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> licks <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}

		}
	},
};
