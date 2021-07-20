const roleClaim = require('../../role-claim')

module.exports = client => {
  let activities = [
      `Cometa`,
      `${client.users.cache.size} membros!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/bioxs"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Estou Online!");
roleClaim(client);
};
