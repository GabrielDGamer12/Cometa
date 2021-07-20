const Discord = require("discord.js");

module.exports = {
    name: "ajuda",
    category: "others"}

module.exports.run = async (client, message, args) => {
  name: 'ajuda';


  const embed = new Discord.MessageEmbed()
    .setTitle(`Ajuda`)
    .setColor("#FF0000")
    .setDescription(`**───────────── ─────────────**\n\n	                                 **Comandos de Musica**\n\n+play(link)	**|** Inicia qualquer video do youtube em formato de audio em um canal de voz!\n+skip          	**|** Pula a Musica Atual!\n+stop	     	**|** Para a musica e o bot sai do canal de voz!\n\n	                                   **Comandos Extras**\n\n+uptime		**|** Mostra quanto tempo o bot não é reiniciado!\n+avatar	 	**|** Envia seu avatar no chat(ou de quem for menciona)!\n+ideia   	 	**|** Envie uma sugestão!\n\n**─────────────  ─────────────**`)

  message.channel.send(embed);
};