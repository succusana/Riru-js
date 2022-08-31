const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bio')
		.setDescription('Prints Riru\'s bio!'),
	async execute(interaction) {
		const interEmbed = new MessageEmbed()
			.setDescription('**Name:** Riru\n**Race/Species:**  Neko!\n**Gender:**  Female\n**Sexuality:**  What?\n**Position:**  Here...?\n\n__**Appearance:**__\n\n**Height:** 5\'5"\n**Hair:**  Long pink hair, occasionally braided.\n**Eyes:**  Purple eyes, sometimes appearing blue depending on the light.\n\n**Clothing:** Riru doesn\'t have much of her own clothing, instead just wearing whatever\'s comfortable or gives the most protection. Usually, she dons a white sleeveless shirt and a black and purple jacket to go over it, along with white stockings and black boots.\n\n**Other Features:** Riru has a pair of cat ears and a cat tail, both bright pink matching her hair and very, *very* tempting to touch.\n\n__**Abilities:**__\n\n**Strength:** Riru never relied on complicated magic or special abilities, instead just going for the easiest option: Raw, intense training. Thanks to this, she has ended up being strong to quite the ridiculous degree, being able to use her sword with ease and having accidentally sent people *through* walls quite a few times rather than into them.\n\n__**Personality:**__\n\nThe most obvious thing about Riru is her jovial yet extremely innocent nature, especially considering her job as an adventurer. Although being rather active and outgoing, she has absolutely no clue about romance and sex, being a complete virgin and starting to blush as soon as anything even remotely steamy is mentioned. Despite this, she is mostly always willing to help anyway, partially because she has never known much else, but also to just see the world and enjoy life, never knowing what\'ll come next.')
			.setImage('https://cdn.discordapp.com/attachments/626416992642924577/930900355292749855/dc77e9732ab558b823d0f4532b3ac6a2.png');
		await interaction.reply({ embeds: [interEmbed] });
	},
};
