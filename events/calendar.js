const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = (client, config, sendWarningDM) => {
    client.on("messageCreate", message => {
        if (message.author.bot) return;
        if (message.content.toLowerCase() == config.prefix + "" + config.calendar.command) {
            const channelData = message.guild.channels.cache.get(message.channelId); 
            if (channelData.name != config.warningChannel.useThisChannel) {
                sendWarningDM(client, config, message);
                return;
            }
            const response = new MessageEmbed()
            .setTitle(config.calendar.embedTitle)
            .setColor(config.calendar.embedColor)
            .setImage(config.calendar.allSeasonImage)
            .setURL(config.calendar.allSeasonImage)
            message.channel.send({embeds: [response]});
        }
    })
}

