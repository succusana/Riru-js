const { clientId } = require('../config.json');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('Kiss someone!')
		.addUserOption(option => option.setName('target') .setDescription('Who to kiss') .setRequired(true))
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
			'https://cdn.discordapp.com/attachments/924603816781959218/924603885568548894/unknown.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603886126374922/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603886612910100/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603886881374268/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/924603887380484156/KanD.gif',
			'https://cdn.discordapp.com/attachments/924603816781959218/999264793720524850/anime-couple-anime-bed.gif?size=4096',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041791291291336814/VeneratedTastyDromedary-size_restricted.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041791346148651008/kissu.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/924603816781959218/924605389650137098/unknown.gif';
		// Preparing target and sender for message.
		const interTarget = interaction.options.getUser('target') + '';
		const interSender = interaction.user.id;
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		if (interTarget === clientId) {
			const interEmbed = new EmbedBuilder()
				.setColor('#FFC0CB')
				.setTitle('Riru gets kissed!')
				.setDescription('Mmh~?!')
				.setImage(`${selfInter}`);
			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interEmbed = new EmbedBuilder()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> kisses <@${interTarget}>!`)
				.setImage(`${chosenInter}`);
			if (pingOption == 'yes') {
				await interaction.reply(`<@${interSender}> kisses <@${interTarget}>!`);
				await interaction.editReply('­  ­­');
				await interaction.editReply({ embeds: [interEmbed] });
			}
			else {
				await interaction.reply({ embeds: [interEmbed] });
			}
		}
	},
};
