const config = require("../config.json");
const Discord = require("discord.js");
const fs = require("graceful-fs");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "listwarn",
    aliases: [""],
    usage: "<user>",
    cooldown: 0,
    guildOnly: false,
    admin: false,
    async execute(message, args, client) {    
        let prefix = config.prefix

        const user = message.mentions.users.first();

        if(user) {
            fs.readFile(`logs/warns/${user.id}.log`, 'utf8', function (err, data) {
                if (err) {
                    return message.channel.send("Aceasta persoana nu are nici un warn!");
                }

                const warns = new MessageEmbed()
                    .setTitle('Lista de avertizare al membrului ' + user.tag)
                    .setDescription(data);
                
                message.channel.send(warns)
            });
        } else {
            return;
        }
    }
}