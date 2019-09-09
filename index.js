const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')	
})

//very messy code but it's okay as long as it works! :>
client.on('message', message => {
	if (message.content === 'uwu hi') {
	message.channel.send('Hello! uwu');
} else if (message.content === 'uwu hello') {
	message.channel.send('Hi! uwu');
} else if (message.content === 'uwu uwu') {
	message.channel.send('uwu')
} 
});
	


client.login(process.env.BOT_TOKEN);
