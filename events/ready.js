module.exports = (client) => {
    console.log(`${client.user.tag} is now online!`);
    let activities = [ `Ładowanie Statusu...`, `Mój Prefix: s!`, `${client.guilds.cache.size} serwerów` ], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 5000);
}