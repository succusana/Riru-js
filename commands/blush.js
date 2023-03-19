const { clientId } = require('../config.json');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blush')
		.setDescription('Blush!')
		.addUserOption(option => option.setName('target') .setDescription('Who to blush at') .setRequired(false))
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
			'https://cdn.discordapp.com/attachments/986692191311261707/1041794478299684955/tumblr_ph5sz7jov71qehrvso2_540.gif',
            'https://cdn.discordapp.com/attachments/986692191311261707/1041794924003213402/tumblr_ndt6h9oFOK1qii0lzo1_500.gif',
            'https://cdn.discordapp.com/attachments/1041797867733536789/1041798012332167258/tonikaku-kawaii-yuzaki-tsukasa.gif',
            'https://cdn.discordapp.com/attachments/1041797867733536789/1041798012780949615/tsukasa-yuzaki-yuzaki.gif',
            'https://cdn.discordapp.com/attachments/1041797867733536789/1041798013124890654/2anime-blush.gif',
            'https://cdn.discordapp.com/attachments/1041797867733536789/1041798013468807259/anime-blush.gif',
            'https://cdn.discordapp.com/attachments/1041797867733536789/1041798013808554095/blushx.gif',
		];
		const chosenInter = interFiles[Math.floor(Math.random() * interFiles.length)] ;
		const selfInter = 'https://cdn.discordapp.com/attachments/1041797867733536789/1041799092650659980/bocchi-bocchi-the-rock.gif';
		const roleColor = interaction.member.displayHexColor;
		const pingOption = interaction.options.getString('mention');

		// Preparing target and sender for message.
		const interSender = interaction.user.id;
		if (interaction.options.getUser('target') === null) {
			const interEmbed = new EmbedBuilder()
				.setColor(`${roleColor}`)
				.setDescription(`<@${interSender}> blushes!`)
				.setImage(`${chosenInter}`);

			await interaction.reply({ embeds: [interEmbed] });
		}
		else {
			const interTarget = interaction.options.getUser('target') + '';
			if (interTarget === clientId) {
				const interEmbed = new EmbedBuilder()
					.setColor('#FFC0CB')
					.setTitle('You blush at Riru!')
					.setDescription('Eh? W-wait, what did I do...?')
					.setImage(`${selfInter}`);

				await interaction.reply({ embeds: [interEmbed] });
			}
			else {
				const interEmbed = new EmbedBuilder()
					.setColor('#8F3BCB')
					.setDescription(`<@${interSender}> blushes at <@${interTarget}>!`)
					.setImage(`${chosenInter}`);
				if (pingOption == 'yes') {
					await interaction.reply(`<@${interSender}> blushes at <@${interTarget}>!`);
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
