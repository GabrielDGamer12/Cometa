const Discord = require("discord.js");

module.exports = async (member, client, guilds) => { 

  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":wine_glass:");

    let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Bem-vindo(a)`)
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **🌑Cometa**!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("")
      .setTimestamp();     
    member.send(embed);
};