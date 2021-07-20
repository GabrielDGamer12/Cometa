const ms = require('ms');
const config = require("../../config.json")
module.exports = {
    name: "reroll",
    category: "moderation",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return message.channel.send(':boom: Você não tem permissão para fazer isso.');
        }

        if (!args[0]) {
            return message.channel.send(':boom: Não consegui encontrar essa mensagem! Tente novamente!');
        }

        let giveaway =
            client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
            client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if (!giveaway) {
            return message.channel.send(':boom: Hm. Não consigo encontrar uma giveaway para `' + args.join(' ') + '`.');
        }

        client.giveawaysManager.reroll(giveaway.messageID)
            .then(() => {
                message.channel.send('Giveaway rerolled!');
            })
            .catch((e) => {
                if (e.startsWith(`Giveaway com a mensagem de ID ${giveaway.messageID} não acabou.`)) {
                    message.channel.send('Essa giveaway não acabou!');
                } else {
                    console.error(e);
                    message.channel.send('Um erro ocorreu...');
                }
            });
    },
}