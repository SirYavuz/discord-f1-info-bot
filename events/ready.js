function readyLog(client, chalk) {
   return console.log(chalk.green(`Logged in as`) + ` ${client.user.tag}`);
}

function setReadyPresence(client, config) {
    client.user.setStatus(config.status);
    setInterval(() => {
        const types = config.activity.types;
        const randomActivityType = Math.floor(Math.random() * Object.keys(types).length);
        const ActivityTypeName = types[randomActivityType]
        const randomActivityLabelLenght = Math.floor(Math.random() * Object.keys(config.activity.filter[ActivityTypeName]).length)
        const ActivityLabelName = config.activity.filter[ActivityTypeName][randomActivityLabelLenght]
        
        // console.log(ActivityTypeName + " " + ActivityLabelName);
        client.user.setPresence({ activities: [{ type: ActivityTypeName, name: ActivityLabelName }] });
        
        
    }, config.activity.time * 1000);
}

module.exports = {
    readyMessage: readyLog,
    readyPresence: setReadyPresence
};