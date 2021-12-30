module.exports = {
	name:'interactionCreate',
	execute(interaction) {
		const timeStamp = new Date() .toLocaleString();
		console.log(`${timeStamp} - ${interaction.user.tag} triggered ${interaction.commandName}. Sent from ${interaction.channel.name} in ${interaction.guild.name}.`);
	},
};
