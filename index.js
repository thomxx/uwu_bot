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
} 
});
	


client.login(process.env.BOT_TOKEN);
