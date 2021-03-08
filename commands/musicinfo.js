const { MessageEmbed } = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Nie Jesteś Na Żadnym Kanale Głosowym!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: 'Teraz Nic Nie Leci!'
        }
    })
    message.channel.send({
        embed:{
            title: 'Aktualnie Leci...',
            description: queue.songs[0].title + ' Dodał Ją: ' + '<@' + queue.songs[0].requester + '>',
            color: 'YELLOW',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}