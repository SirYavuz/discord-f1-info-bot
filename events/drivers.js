const { Client, Intents, MessageEmbed } = require('discord.js');
 
module.exports = (client, config, sendWarningDM) => {
    client.on("messageCreate", message => {
        if (message.author.bot) return;
        
    });
};