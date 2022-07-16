const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: Object.values(Intents.FLAGS).reduce((p, c) => p + c, 0)});
const config = require('./config.json');
const chalk = require('chalk');
const presence = require('./events/presence.js');
const teams = require('./events/teams.js');
const giphyAPI = require('./events/giphyAPI.js');
const sendWarningDM = require('./events/sendWarningDM.js');
const calendar = require('./events/calendar.js');

client.on('ready', () => {
    presence.readyMessage(client, chalk);
    presence.readyPresence(client, config);
    teams(client, config, sendWarningDM);
    giphyAPI(client, config, sendWarningDM);
    calendar(client, config, sendWarningDM);
    console.log("Total guild count: " + chalk.green( client.guilds.cache.size));
});

client.login(config.token);
