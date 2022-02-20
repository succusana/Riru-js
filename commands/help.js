const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Lists all available commands!')
		.addStringOption(option => option.setName('page')
			.setDescription('Which help page to view')
			.setRequired(true)
			.addChoice('Interaction', 'page_interaction')
			.addChoice('Misc', 'page_misc')),

	async execute(interaction) {
		const pageChoice = interaction.options.getString('page');
		if (pageChoice === 'page_interaction') {
			const helpEmbed = new MessageEmbed()
				.setTitle('Interaction Commands:')
				.setColor('#90ee90')
				// This isn't a good idea, and should probably be dynamically generated.
				.addFields(
					{ name: '/boop', value: 'Boop somebody!' },
					{ name: '/bite', value: 'Bite someone!' },
					{ name: '/bonk', value: 'Bonk somebody!' },
					{ name: '/cuddle', value: 'Cuddle someone!' },
					{ name: '/grouphug', value: 'Hug two people at once!' },
					{ name: '/hug', value: 'Hug someone!' },
					{ name: '/kiss', value: 'Kiss someone!' },
					{ name: '/lick', value: 'Lick someone!' },
					{ name: '/makeout', value: 'Kiss someone, but with more *passion.*' },
					{ name: '/pat', value: 'Pat someone!' },
					{ name: '/pounce', value: 'Pounce on someone!' },
					{ name: '/pout', value: 'Pout!' },
					{ name: '/smug', value: 'Get smug!' },
				);
			await interaction.reply({ embeds: [helpEmbed] });
		}
		else if (pageChoice === 'page_misc') {
			const helpEmbed = new MessageEmbed()
				.setTitle('Miscellaneous Commands:')
				.setColor('#90ee90')
				.addFields(
					{ name: '/about', value: 'Tells you about Riru.' },
					{ name: '/invite', value: 'Invite Riru to your server!' },
					{ name: '/hello', value: 'Say Hi to Riru!' },
					{ name: '/say', value: 'Make Riru say something!' },
					{ name: '/8ball', value: 'Ask Riru\'s magic 8 ball a question!' },
				);
			await interaction.reply({ embeds: [helpEmbed] });
		}
		else {
			console.log('Help command was sent through without a parameter. WHAT THE FUCK DID YOU DO.');
		}
	},
};
