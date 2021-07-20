const Timeout = new Set();
const {MessageEmbed} = require('discord.js')
const config = require('../../config.json')
const ms = require('ms')
const prefix1 = ("!")
const prefix2 = ('<@!856680638340792360')

module.exports = async (bot , message, member, client, Discord, send) => {

    // if (await message.content.startsWith('https://')) {
    //     message.delete()
    //     return message.channel.send('no links please')
    // }


    if (message.author.bot) return;
    let mentionRegex = message.content.match(new RegExp(`<@!<856680638340792360>`, "gi"));
    if (mentionRegex) {
      prefix = `${mentionRegex[0]} `;
    } else {
      prefix = "!";
    }
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    if(!message.member) message.member = await message.guild.fetchMember(message);
    if(!message.guild) return;

    const args = message.content.slice(prefix1.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    
    if (command) {
        if(command.timeout){
            if(Timeout.has(`${message.author.id}${command.name}`)) {
                return message.reply(`You can only use this command every ${ms(command.timeout)}!`)
            }else{
                
                command.run(bot, message, args);
                Timeout.add(`${message.author.id}${command.name}`)
                setTimeout(() => {
                    Timeout.delete(`${message.author.id}${command.name}`)
                }, command.timeout);
            }
        }else{
            command.run(bot,message,args,cmd,member,send)
        }

    }
}