const config = require("../config.json");
const Discord = require("discord.js");
const fs = require("graceful-fs");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "delwarn",
    aliases: [""],
    usage: "<user>",
    cooldown: 0,
    guildOnly: false,
    admin: false,
    async execute(message, args, client) {    
        let prefix = config.prefix

        const user = message.mentions.users.first();

        if(user) {
            fs.unlink(`logs/warns/${user.id}.log`, (err) => {
                if (err) {
                    return message.channel.send("Aceasta persoana nu are nici un warn!");
                } else {
                    message.channel.send("A fost sterse toate warnurile de la acest user " + `**${user.tag}**`)
                }
            })
        } else {
            return;
        }
    }
}