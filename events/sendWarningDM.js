const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = (client, config, message) => {
    const warningMessage = new MessageEmbed()
    .setDescription(config.warningChannel.warningWrongChannel + " **" + config.warningChannel.useThisChannel+ "**")
    .setColor(config.warningChannel.warningMessageColor)
    message.author.send({embeds: [warningMessage]});
    message.delete();
    return;
}