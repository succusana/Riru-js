
const { client, EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask Riru\'s magic 8 ball for answers!')
		.addStringOption(option =>
			option.setName('question')
				.setDescription('What question will you ask?')
				.setRequired(true)),

	async execute(interaction) {
		const answers = [
			'Yes.',
			'*Very* yes.',
			'It is certain.',
			'Without a doubt.',
			'Ask again later.',
			'Potentially.',
			'No.',
			'It is very doubtful.',
			'Definitely not.',
			'It is unlikely.',
		];

		let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
		const sentQuestion = interaction.options.getString('question');
		let embedColor = '#0000b2';

		if (sentQuestion === 'What is the music of life?') {
			chosenAnswer = '***"Silence, my brother."***\n*The ball now glows a faint red, confusing Riru immensely.*';
			embedColor = '#ff0000';
		}

		const answerEmbed = new EmbedBuilder()
			.setColor(`${embedColor}`)
			.addFields(
				{ name: '**You asked:**', value: `${sentQuestion}` },
				{ name: '**The ball answers:**', value: `${chosenAnswer}` },
			);
		await interaction.reply({ embeds: [answerEmbed] });
	},
};
