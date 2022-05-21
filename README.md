# Riru!
![](https://cdn.discordapp.com/attachments/924613221627854909/930915390639444018/riru.png)  
A Discord interaction bot/familiar/daughter, written using discord.js and designed with interaction commands as her main focus.  

Profile picture by [yukikasa.](https://www.pixiv.net/en/users/260958)

### Invite Riru to your server [here!](https://discord.com/oauth2/authorize?client_id=923637342219157564&permissions=51200&scope=bot%20applications.commands)

## Requirements:
- The latest version of NodeJS
- The latest version of discord.js `npm install discord.js@latest`
- `application.commands` scope enabled in your Discord Developer Portal for your bot.
- A Linux host system (because there's no way I'm testing a development environment on Windows).

## Installation: 
1. Download/Clone the repository.
2. Open the Riru-js directory in a terminal.
3. Run `npm init` to install NPM dependencies.
4. Create config.json in the main directory and populate it as described below.
5. Run `node deploy-commands-global.js` to inform Discord of your commands.
6. Run `node index.js` to run the bot.

## Config:

Riru relies on a few key variables, stored in config.json. These variables are **not** to be put in a public repository, so you will have to create them and write these five values yourself.

- `clientId`: The user ID of your bot.
- `guildId`: The ID of the main server your bot is tested in.
- `ownerid`: The ID of the owner of the bot. Used for permission checks.
- `alterid`: The ID of an additional person who has permissions to use owner commands. Think of this as a "co-owner" position.
- `token`: Your bot's token. 

## Development:

To add new commands, make a new file in the commands/ subfolder. Make sure to add documentation to the /help command and to run `deploy-commands-global.js` to update on Discord's end.

Riru is developed, hosted and designed on Linux hosts exclusively. If everything breaks on Windows, use WSL or just give Linux a try already.

~~Riru is a good girl, no making her do bad things.~~
