module.exports = {
	name:'interactionCreate',
	execute(interaction) {
		const timeStamp = Date().toLocaleString();
		const isServer = interaction.inGuild();
		if (isServer == false) {
			console.log(`${timeStamp} - ${interaction.user.tag} triggered ${interaction.commandName} in DMs.`);
		}
		else {
			console.log(`${timeStamp} - ${interaction.user.tag} triggered ${interaction.commandName}. Sent from ${interaction.channel.name} in ${interaction.guild.name}.`);
		}
	},
};
