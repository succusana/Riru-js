const { clientId } = require('../config.json');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pout')
		.setDescription('Pout!')
		.addUserOption(option => option.setName('target') .setDescription('Who to pout at') .setRequired(false))
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
			'https://cdn.discordapp.com/attachments/926186290163093594/926186390897713182/unknown.gif',
			'https://cdn.discordapp.com/attachments/926186290163093594/926186391744946237/unknown_3.gif',
			'https://cdn.discordapp.com/attachments/926186290163093594/926186392592216124/unknown_2.gif',
			'https://cdn.discordapp.com/attachments/926186290163093594/926186393338806322/unknown_1.gif',
			'https://cdn.discordapp.com/attachments/926186290163093594/988156143652188160/unknown.png',
			'https://cdn.discordapp.com/attachments/926186290163093594/1041794114619973663/shikimori-shikimoris-not-just-a-cutie.gif',
			'https://cdn.discordapp.com/attachments/986692191311261707/1041794962456592414/kB3Itkn.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/926186290163093594/926186391329714226/unknown_4.gif';
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		// Preparing target and sender for message.
		const interSender = interaction.user.id;
		if (interaction.options.getUser('target') === null) {
			const interEmbed = new EmbedBuilder()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> pouts!`)
				.setImage(`${chosenInter}`);

			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interTarget = interaction.options.getUser('target') + '';
			if (interTarget === clientId) {
				const interEmbed = new EmbedBuilder()
					.setColor('#FFC0CB')
					.setTitle('You pout at Riru!')
					.setDescription('Wait, what are you pouting at me for? Did I say something?')
					.setImage(`${selfInter}`);

				await interaction.reply({ embeds: [interEmbed] });
			}
			else {
				const interEmbed = new EmbedBuilder()
					.setColor(`${roleColor}`)
					.setDescription(`<@${interSender}> pouts at <@${interTarget}>!`)
					.setImage(`${chosenInter}`);
				if (pingOption == 'yes') {
					await interaction.reply(`<@${interSender}> pouts at <@${interTarget}>!`);
					await interaction.editReply('­  ­­');
					await interaction.editReply({ embeds: [interEmbed] });
				}
				else {
					await interaction.reply({ embeds: [interEmbed] });
				}
			}
		}
	},
};
