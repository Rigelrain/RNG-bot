# RNG bot for Discord
A bot that can roll dice for you

## Setup
- clone the repository
- ```npm install``` to get dependencies
- change the prefix character if you want using the config.json file

## Setting up a Discord bot
See [Discord.js documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) for a most helpful guide to getting your bot up and running.

Important thing is to **save your own bot token** since you'll need this to deploy your bot. The token will be used from environment variables and how you'll actually use it depends on your chosen deployment method.

## Use locally
If you just want to start the bot from your local machine, edit this line in index.js:
```const token = process.env.TOKEN``` --> Replace 'process.env.TOKEN' with the token you got from Discord development center.

Start your bot by using ```node .``` (for example, you can also use 'node index.js' or 'npm start'). The bot should be immediately online on any servers you have added it to. If it does not come online, make sure that you have put in the right token.

Then you can use the commands by typing them into the Discord channel (or to the bot directly by IM) using the prefix in the config.

## Deployment
(TBA)