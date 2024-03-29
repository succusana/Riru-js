const { Events } = require('discord.js');
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		const timeStamp = Date().toLocaleString();
		const isServer = interaction.inGuild();
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
			if (isServer == false) {
				console.log(`${timeStamp} - ${interaction.user.tag} triggered ${interaction.commandName} in DMs.`);
			}
			else {
				console.log(`${timeStamp} - ${interaction.user.tag} triggered ${interaction.commandName}. Sent from ${interaction.channel.name} in ${interaction.guild.name}.`);
			};
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}	
	},
};