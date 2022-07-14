const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = (client, config) => {
    client.on("messageCreate", message => {
        if (message.author.bot) return;
        let data = [];
        if (config.scores.f1.teams[message.content.toLowerCase().slice(1)] == undefined) return;
        if (message.content.toLowerCase() == config.prefix + "" + config.scores.f1.teams[message.content.toLowerCase().slice(1)].name) {
            const usingTeamCommand = message.content.toLowerCase();
            const messageTeamName = usingTeamCommand.substr(1);
            data = config.scores.f1.teams[messageTeamName];
            
            const response = new MessageEmbed()
              .setTitle(data.label)
              .setDescription(data.desc)
              .setColor(data.color)
              .setThumbnail(data.logo)
              .setURL(data.source)
              .setTimestamp()
              .setFooter({ text: data.label})
              .addFields(
                { name: "Team Chief", value: `${data.manager}`, inline: true },
                { name: "Driver", value: `${data.drivers[0]}`, inline: true },
                { name: "Driver", value: `${data.drivers[1]}`, inline: true },
                { name: "Wins", value: `${data.wins}`, inline: true },
                { name: "Podiums", value: `${data.podiums}`, inline: true },
                { name: "Pole Positions", value: `${data.polepos}`, inline: true },
                { name: "Fastest Lap", value: `${data.fastestlaps}`, inline: true },
                { name: "Team Champions", value: `${data.teamchamps}`, inline: true },
                { name: "Driver Champions", value: `${data.racerchamps}`, inline: true },
            )
            message.channel.send({embeds: [response]});
        }

    })
}

