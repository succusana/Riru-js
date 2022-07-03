# Riru!
![](https://cdn.discordapp.com/attachments/924613221627854909/930915390639444018/riru.png)  
A Discord interaction bot, written using discord.js and designed with interaction commands (hugs, kisses etc.) as her main focus.  

Profile picture by [yukikasa.](https://www.pixiv.net/en/users/260958)

### Invite Riru to your server [here!](https://discord.com/oauth2/authorize?client_id=986692486300852244&permissions=51200&scope=bot%20applications.commands)

## Requirements:
- The latest version of NodeJS
- The latest version of discord.js.
- `application.commands` scope enabled in your Discord Developer Portal for your bot.
- A Linux host system (because there's no way I'm testing this on Windows).

## Installation:
1. Download/Clone the repository.
2. Open the Riru-js directory in a terminal.
3. Run `npm install` to install dependencies.
4. Create config.json in the main directory and populate it as described below.
5. Run `node deploy-commands-global.js` to register your commands with Discord.
6. Run `node index.js` to start Riru.

## Config:

Riru relies on a few key variables, stored in config.json. These values are dependent on what your specific setup is, so you will have to populate them yourself.

- `clientId`: The user ID of your bot.
- `guildId`: The ID of the main server your bot is tested in.
- `ownerId`: The ID of the owner of the bot. Used for permission checks.
- `alterId`: The ID of an additional person who has permissions to use owner commands. Think of this as a "co-owner" position.
- `token`: Your bot's token.

## Development:

To add new commands, make a new file in the commands/ subfolder. `templatecommand.js` is provided (in the root directory) as an example. Make sure to add documentation to the /help command and to run `deploy-commands-global.js` to update on Discord's end.

Riru is developed, hosted and designed on Linux hosts exclusively. If everything breaks on Windows, use WSL or just give Linux a try already.

All of Riru's output goes to stdout by default. If you wish to make log files, redirect the output of `node index.js` to a file.

~~Riru is a good girl, no making her do bad things.~~
