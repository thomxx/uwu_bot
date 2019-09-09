const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')	
})

client.on('message', message => {
	if (message.content === 'uwu hi') {
	message.channel.send('Hello! uwu');
} else if (message.content === 'uwu hello') {
	message.channel.send('Hi! uwu');
} else if (message.content === 'uwu server') {
	message.channel.send('You are currently on' )
}
});
	


client.login(process.env.BOT_TOKEN);
