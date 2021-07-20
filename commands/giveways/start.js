const ms = require('ms');
const config = require("../../config.json")

module.exports = {
    name: "start",
    category: "moderation",
    run: async(client, message, args) => {
        if (config["Giveaway_Options"].giveawayManagerID) {
            if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.id === config["Giveaway_Options"].giveawayManagerID)) {
                return message.channel.send(':boom: Você não tem permissão para fazer isso.');
            }
        } else {
            if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
                return message.channel.send(':boom: Você não tem permissão para fazer isso');
            }
        }

        let giveawayChannel = message.mentions.channels.first();
        if (!giveawayChannel) {
            return message.channel.send(':boom: Não consegui encontrar esse canal! Tente novamente!');
        }

        let giveawayDuration = args[1];
        if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
            return message.channel.send(':boom: Você não forneceu uma duração. Você pode tentar de novo?');
        }

        let giveawayNumberWinners = args[2];
        if (isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)) {
            return message.channel.send(':boom: Você não forneceu a quantidade de vencedores.');
        }

        let giveawayPrize = args.slice(3).join(' ');
        if (!giveawayPrize) {
            return message.channel.send(':boom: Parece que você não me deu um prêmio válido!');
        }
        if (!config["Giveaway_Options"].showMention && config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {

            giveawayChannel.send(`<@&${config["Giveaway_Options"].giveawayRoleID}>`).then((msg) => msg.delete({ timeout: 1000 }))
            client.giveawaysManager.start(giveawayChannel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: parseInt(giveawayNumberWinners),
                hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
                messages: {
                    giveaway: ":tada: **GIVEAWAY** :tada:",
                    giveawayEnded: ":tada: **GIVEAWAY ENDED** :tada:",
                    timeRemaining: "Tempo restante: **{duration}**!",
                    inviteToParticipate: "Reaja com 🎉 para participar!",
                    winMessage: "Parabéns, {winners}! Você ganhou o **{prize}**!",
                    embedFooter: "Giveaways",
                    noWinner: "Não há participantes suficientes para determinar um vencedor!",
                    hostedBy: "Criado por: {user}",
                    winners: "Ganhador(es)",
                    endedAt: "Terminou em",
                    units: {
                        seconds: "seconds",
                        minutes: "minutes",
                        hours: "hours",
                        days: "days",
                        pluralS: false
                    }
                }
            });

        } else if (config["Giveaway_Options"].showMention && config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {

            client.giveawaysManager.start(giveawayChannel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: parseInt(giveawayNumberWinners),
                hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
                messages: {
                    giveaway: (config["Giveaway_Options"].showMention ? `<@&${config["Giveaway_Options"].giveawayRoleID}>\n\n` : "") + ":tada: **GIVEAWAY** :tada:",
                    giveawayEnded: (config["Giveaway_Options"].showMention ? `<@&${config["Giveaway_Options"].giveawayRoleID}>\n\n` : "") + ":tada: **GIVEAWAY ENDED** :tada:",
                    timeRemaining: "Tempo restante: **{duration}**!",
                    inviteToParticipate: "Reaja com 🎉 para participar!",
                    winMessage: "Parabéns, {winners}! Você ganhou o **{prize}**!",
                    embedFooter: "Giveaways",
                    noWinner: "Não há participantes suficientes para determinar um vencedor!",
                    hostedBy: "Criado por: {user}",
                    winners: "Ganhador(es)",
                    endedAt: "Terminou em",
                    units: {
                        seconds: "seconds",
                        minutes: "minutes",
                        hours: "hours",
                        days: "days",
                        pluralS: false
                    }
                }
            });

        } else if (!config["Giveaway_Options"].showMention && !config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {
            giveawayChannel.send(`@everyone`).then((msg) => msg.delete({ timeout: 1000 }))
            client.giveawaysManager.start(giveawayChannel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: parseInt(giveawayNumberWinners),
                hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
                messages: {
                    giveaway: ":tada: **GIVEAWAY** :tada:",
                    giveawayEnded: ":tada: **GIVEAWAY ENDED** :tada:",
                    timeRemaining: "Tempo restante: **{duration}**!",
                    inviteToParticipate: "Reaja com 🎉 para participar!",
                    winMessage: "Parabéns, {winners}! Você ganhou o **{prize}**!",
                    embedFooter: "Giveaways",
                    noWinner: "Não há participantes suficientes para determinar um vencedor!",
                    hostedBy: "Criado por: {user}",
                    winners: "Ganhador(es)",
                    endedAt: "Terminou em",
                    units: {
                        seconds: "seconds",
                        minutes: "minutes",
                        hours: "hours",
                        days: "days",
                        pluralS: false
                    }
                }
            });

        } else if (config["Giveaway_Options"].showMention && !config["Giveaway_Options"].giveawayRoleID && config["Giveaway_Options"].giveawayMention) {
            client.giveawaysManager.start(giveawayChannel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: parseInt(giveawayNumberWinners),
                hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
                messages: {
                    giveaway: (config["Giveaway_Options"].showMention ? `\n\n` : "") + ":tada: **GIVEAWAY** :tada:",
                    giveawayEnded: (config["Giveaway_Options"].showMention ? `\n\n` : "") + ":tada: **GIVEAWAY ENDED** :tada:",
                    timeRemaining: "Tempo restante: **{duration}**!",
                    inviteToParticipate: "Reaja com 🎉 para participar!",
                    winMessage: "Congratulations, {winners}! You won the **{prize}**!",
                    embedFooter: "Giveaways",
                    noWinner: "Não há participantes suficientes para determinar um vencedor!",
                    hostedBy: "Criado por: {user}",
                    winners: "ganhador(es)",
                    endedAt: "Terminou em",
                    units: {
                        seconds: "seconds",
                        minutes: "minutes",
                        hours: "hours",
                        days: "days",
                        pluralS: false
                    }
                }
            });
        } else if (!config["Giveaway_Options"].giveawayMention) {
            client.giveawaysManager.start(giveawayChannel, {
                time: ms(giveawayDuration),
                prize: giveawayPrize,
                winnerCount: parseInt(giveawayNumberWinners),
                hostedBy: config["Giveaway_Options"].hostedBy ? message.author : null,
                messages: {
                    giveaway: ":tada: **GIVEAWAY** :tada:",
                    giveawayEnded: ":tada: **GIVEAWAY ENDED** :tada:",
                    timeRemaining: "Tempo restante: **{duration}**!",
                    inviteToParticipate: "Reaja com 🎉 para participar!",
                    winMessage: "Parabéns, {winners}! Você ganhou o **{prize}**!",
                    embedFooter: "Giveaways",
                    noWinner: "Não há participantes suficientes para determinar um vencedor!",
                    hostedBy: "Criado por: {user}",
                    winners: "ganhador(es)",
                    endedAt: "Terminou em",
                    units: {
                        seconds: "seconds",
                        minutes: "minutes",
                        hours: "hours",
                        days: "days",
                        pluralS: false
                    }
                }
            });
        }

    }
}