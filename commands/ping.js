const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: "ping",
    aliases: ["ping"],
    usage: "<user>",
    cooldown: 0,
    guildOnly: false,
    admin: false,
    async execute(message, args, client) {    
        let prefix = config.prefix
        
        message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}