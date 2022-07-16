const { Client, Intents, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports =  (client, config, sendWarningDM) => {
    client.on("messageCreate", async (message) => {      
        let splitMessage = message.content.split(" ");
      
        if (splitMessage[0] === config.prefix + config.gif.command) {
            if (message.author.bot) return;
            const channelData = message.guild.channels.cache.get(message.channelId); 

            if (channelData.name != config.warningChannel.useThisChannel) {
                sendWarningDM(client, config, message);
                return;
            }

            const randomGifTag = Math.floor(Math.random() * config.gif.tags.length);
            const url = `http://api.giphy.com/v1/gifs/search?&api_key=${config.gif.api}&limit=100&q=${config.gif.tags[randomGifTag]}`;
      
            const res = await fetch(url);
      
            const json = await res.json();
            
            const randomIndex = Math.floor(Math.random() * json.data.length);
            const getRandomGif = json.data[randomIndex].images.original.url;
      
            const response = new MessageEmbed()
            .setTitle("Random Selected Tag : " + config.gif.tags[randomGifTag])
            .setColor(config.gif.color)
            .setImage(getRandomGif)
            .setURL(getRandomGif)
            message.channel.send({embeds: [response]});
        }
      });
}


