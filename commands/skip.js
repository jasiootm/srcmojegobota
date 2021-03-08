exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Nie jesteś na żadnym kanale głosowym!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'Nic Nie Ma W Kolejce! Aby puścić wpisz `s!play <nazwaPiosenki>`',
            color: 'BLACK'
        }
    })
}
    if(queue.songs.length !== 0) {
        message.react('✅')
        queue.connection.dispatcher.end('Piosenka Została Pominięta!')
    }
}