const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');

var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));

var sender = message.author;

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

if (!userData[sender.id]) userData[sender.id] = {
	messagesSent: 0
}
	
userData[sender.id].messagesSent++;

fs.writeFile('Storage/userData.json', JSON.stringify(userData), err => {
	if (err) console.error(err);
});

client.login(process.env.BOT_TOKEN);
