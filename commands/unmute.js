const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: "unmute",
    aliases: [""],
    usage: "<user>",
    cooldown: 0,
    guildOnly: false,
    admin: false,
    async execute(message, args, client) {    
        let prefix = config.prefix

        const user = message.mentions.users.first().id;
        if(!user) return message.channel.send("You need to specify a user!")

        message.channel.permissionOverwrites.get(user).delete();
        message.channel.send(`${message.mentions.users.first().tag} has been unmuted!`)
    }
}