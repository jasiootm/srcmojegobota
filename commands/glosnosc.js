exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Nie Jesteś Na Kanale Głosowym!');

    let queue = message.client.queue.get(message.guild.id)

    if(!args[0]) return message.channel.send({
        embed: {
            description: 'Aktualna Głośność: ' + queue.volume
        }
    })

    if(args[0] > 10) return message.channel.send('Tak głośno? COś cie ku*wa boli :grin:')

    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    queue.volume = args[0]
    message.channel.send({
        embed: {
            description: 'Ustawiono Głośnośc Na ' + args[0]
        }
    })
}