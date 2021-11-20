const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: "say",
    aliases: ["broadcast"],
    usage: "<user>",
    cooldown: 0,
    guildOnly: false,
    admin: false,
    async execute(message, args, client) {    
        let prefix = config.prefix
        let msg;
        let textChannel = message.mentions.channels.first()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)

            message.channel.send(`**${msg}** has been sended to **${textChannel}**`)
        } else {
            return;
        }
    }
}