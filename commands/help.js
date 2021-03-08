exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Pomoc',
            description: `
            s!play <nazwaPiosenki> - Zagraj Piosenke z youtuba
            s!pauza - Zapauzuj Muzyke
            s!unpause - Odpauzuj Muzyke
            s!musicinfo - Otrzymaj informacje aktualnej muzyki
            s!skip - Skip to next song
            s!stop - Przestań Grac Muzyke
            s!glosnosc <value> - Zmien głośność piosenki
            s!kolejka - Zobacz pełną kolejke
            `,
            color: 'GREEN'
        }
    })
}
