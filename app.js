const fs = require('node:fs');
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0)});
const config = require('./config.json');
const chalk = require('chalk');
const { readdir, readdirSync, read } = require('node:fs');
const ready = require('./events/ready.js');

// readdirSync('./events/').forEach(async file => {
//     const event = await import(`./events/${file}`).then(m => m.default);
//     event(client);
//     // console.log(chalk.green(`Loaded event ${file}`));
// });

client.on('ready', () => {
    ready.readyMessage(client, chalk);
    ready.readyPresence(client, config);
});

client.login(config.token);
