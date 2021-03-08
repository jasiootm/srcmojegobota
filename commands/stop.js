exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Nie jesteś na zadnym kanale głosowym!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Nie Moge Zastopowac Jeśli Nic Nie Gra!',
            color: 'BLACK'
        }
    })
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Zatrzymano!')
}