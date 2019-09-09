const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')	
})

client.on('message', message => {
	if (message.content === 'uwu hi') {
	message.channel.send('Hello! uwu');
}
});
	


client.login(process.env.BOT_TOKEN);
