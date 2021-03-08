exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Nie jesteś na żadnym kanale głosowym!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Nie moge zapauzowac ciszy.'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.pause()
    message.react('⏸')
    message.channel.send('Zapazuzowano Piosenke!')
}