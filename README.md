# RNG bot for Discord
A bot that can roll dice for you

## Setup
- clone the repository
- ```npm install``` to get dependencies
- make config file into the root directory, name it config.json
   - you can make a copy of the config-template.json, rename it into config.json
   - get your own Discord bot token and place it as the 'token' value
   - change the prefix character if you want

## Setting up a Discord bot
See [Discord.js documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) for a most helpful guide to getting your bot up and running

## Use
Start your bot by using ```node .``` (for example). Then you can use the commands by typing them into the Discord channel (or to the bot directly by IM) using the prefix in the config.