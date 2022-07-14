const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0)});
const config = require('./config.json');
const chalk = require('chalk');
const ready = require('./events/ready.js');
const teams = require('./events/teams.js');

client.on('ready', () => {
    ready.readyMessage(client, chalk);
    ready.readyPresence(client, config);
    teams(client, config);
});

client.login(config.token);
