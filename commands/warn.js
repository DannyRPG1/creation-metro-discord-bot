const config = require("../config.json");
const Discord = require("discord.js");
const fs = require("graceful-fs");
const client = new Discord.Client();
module.exports = {
    name: "warn",
    aliases: [""],
    usage: "<user>",
    cooldown: 0,
    guildOnly: false,
    admin: false,
    async execute(message, args, client) {    
        let prefix = config.prefix

        const user = message.mentions.users.first();
        msg = args.slice(1).join(" ");

        fs.appendFile(`logs/warns/${user.id}.log`, `\n **${user.tag}** a luat warn, pentru ca: **${msg}**`, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    }
}