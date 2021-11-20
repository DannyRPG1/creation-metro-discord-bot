const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: "mute",
    aliases: [""],
    usage: "<user>",
    cooldown: 0,
    guildOnly: false,
    admin: false,
    async execute(message, args, client) {    
        let prefix = config.prefix

        const user = message.mentions.users.first();
        if(!user) return message.channel.send("You need to specify a user!")

        message.channel.overwritePermissions([
            {
                id: user.id,
                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'],
            },
        ]);

        message.channel.send(`${user.tag} has been muted!`)
    }
}