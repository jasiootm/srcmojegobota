const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Nie jesteś na żadnym kanale głosowym!');
    const queue = message.client.queue.get(message.guild.id)
    let status;
    if(!queue) status = 'Nic Nie Ma W Kolejce!'
    else status = queue.songs.map(x => '• ' + x.title + ' -Dodał ' + `<@${x.requester.id}>`).join('\n')
    if(!queue) np = status
    else np = queue.songs[0].title
    if(queue) thumbnail = queue.songs[0].thumbnail
    else thumbnail = message.guild.iconURL()
    let embed = new MessageEmbed()
    .setTitle('Kolejka')
    .setThumbnail(thumbnail)
    .setColor('GREEN')
    .addField('Teraz Gram', np, true)
    .setDescription(status)
    message.channel.send(embed)
}