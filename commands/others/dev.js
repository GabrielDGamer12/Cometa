module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('');
};
const Discord = require("discord.js");

module.exports = {
    name: "dev",
    category: "others",
    run: async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("Desenvolvedor")
    .setThumbnail("https://cdn.discordapp.com/attachments/787491838545231902/833738674716803123/Arte_de_Canal.jpg")
    .setColor("#FF0000")
    .setDescription(`**Desenvolvido Por GabrielDGamer.** \n\n**Instagram**: https://www.instagram.com/gabrieldgamer_/\n**Youtube**: https://youtube.com/c/gabrieldgamer\n**Twitch**: https://www.twitch.tv/gabrieldgamer_\n\n Caso encontre algum erro no bot <@856680638340792360>, envie uma mensagem para <@737039257709051925>\n\nCódigo Aberto: **https://replit.com/@GabrielDGamer/Cometa**`)

  message.channel.send(embed);
}};