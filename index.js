const Discord = require('discord.js');
const client = new Discord.Client();

let px = 'uwu ';
let guildname = message.guild.name;

client.once('ready', () => {
	console.log('Ready!')	
})

client.on('message', message => {
	if (message.content === px'hi') {
	message.channel.send('Hello! uwu');
} else if (message.content === px'hello') {
	message.channel.send('Hi! uwu');
} else if (message.content === 'uwu server') {
	message.channel.send('You are currently on 'guildname )
}
});
	


client.login(process.env.BOT_TOKEN);
