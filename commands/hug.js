const { clientId } = require('../config.json');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to hug') .setRequired(true))
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
			'https://cdn.discordapp.com/attachments/924373854044946433/924373913511813150/hug1.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373913016893440/hug2.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373912375148604/hug3.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373911800533112/hug5.gif',
			'https://cdn.discordapp.com/attachments/924373854044946433/924373911439814726/hug6.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041789830729842688/9d9fe47c884b653409906508531bda2130ab0667_hq.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041791816564998184/tumblr_p9lw4y2VWb1tx8o4yo1_540.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041791842129281146/tumblr_p76znmBQt51u86t2qo1_500.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041793410140483644/72399723b17dd3ed0425541bd9a756a52fd8507d_hq.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/924373854044946433/924378713632698368/hugself.gif';
		const loneInter = 'https://cdn.discordapp.com/attachments/924373854044946433/1041789067630747748/enage-kiss-anime-hug.gif'
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const selfName = interaction.client.user.username.replace(/[^0-9a-z\s]/gi, '');
		const roleColor = interaction.member.displayHexColor;
		// Mentioning target if requested.
		const pingOption = interaction.options.getString('mention');

		// Preparing and sending embed.
		if (interTarget === clientId) {
			const interEmbed = new EmbedBuilder()
				.setColor('#FFC0CB')
				.setTitle(`${selfName} gets hugged!`)
				.setDescription(`Wait-!\n*${selfName} accepts the hug, blushing a fair bit but hugging back gently.*`)
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else if (interTarget === interSender) {
			const interEmbed = new EmbedBuilder()
				.setColor('#FFC0CB')
				.setTitle(`You get a hug from ${selfName} instead!`)
				.setDescription('If there\'s nobody else to give you a hug, you can just ask...')
				.setImage(`${loneInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new EmbedBuilder()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> hugs <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> hugs <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}

		}
	},
};
