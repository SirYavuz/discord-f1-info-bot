const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0)});
const config = require('./config.json');
const chalk = require('chalk');
const presence = require('./events/presence.js');
const teams = require('./events/teams.js');
const giphyAPI = require('./events/giphyAPI.js');
const sendWarningDM = require('./events/sendWarningDM.js');

client.on('ready', () => {
    presence.readyMessage(client, chalk);
    presence.readyPresence(client, config);
    teams(client, config, sendWarningDM);
    giphyAPI(client, config, sendWarningDM);
});

client.login(config.token);
