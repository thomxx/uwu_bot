const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')	
})

var px = 'uwu'
//very messy code but it's okay as long as it works! :>
client.on('message', message => {
	if (message.content === (px) + ' hi') {
	message.channel.send('Hello! uwu');
} else if (message.content === (px) + ' hello') {
	message.channel.send('Hi! uwu');
} else if (message.content === (px) + ' uwu') {
	message.channel.send('uwu')
} else if (message.channel.send === (px) + ' profile') {
        const statsembed = new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setTitle('Your Stats')
                .addField('Profile Name:', message.author.username)
                .addField('Your Level:', '1')
                .setColor('0x40FF08')
                .setFooter('This bot is retarded. -Pasas1345');
            message.channel.send(statsembed);
}
});
	


client.login(process.env.BOT_TOKEN);
