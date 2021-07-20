module.exports = {
    name: "end",
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
        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
            .then(() => {
                message.channel.send('A giveaway terminará em menos de ' + (client.giveawaysManager.options.updateCountdownEvery / 1000) + ' seconds...');
            })
            .catch((e) => {
                if (e.startsWith(`Giveaway with message ID ${giveaway.messageID} ja acabou.`)) {

                    message.channel.send('Essa giveaway já acabou!');

                } else {
                    console.error(e);
                    message.channel.send('Um erro ocorreu...');
                }
            });
    },
}