const { clientId } = require('../config.json');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bite')
		.setDescription('Bite someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to bite') .setRequired(true))
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
			'https://cdn.discordapp.com/attachments/929832960436371496/930188461871349800/unknown.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188462156550186/unknown_copy_1.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188462429175808/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188462739587154/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/930188463003807764/unknown_1_copy_1.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/1041795063535120584/2anime-bite.gif',
			'https://cdn.discordapp.com/attachments/929832960436371496/1041795064013266994/anime-bite.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/929832960436371496/930189526809317376/unknown.gif';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');
		if (interTarget === clientId) {
			const interEmbed = new EmbedBuilder()
				.setColor('#FFC0CB')
				.setDescription('*Riru flees before you get to bite her!*')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new EmbedBuilder()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> bites <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> bites <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}
		}
	},
};
