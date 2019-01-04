const Discord = require('discord.js');	
const client = new Discord.Client();	
console.log("Scrpit By Dream");	


 client.on("ready", () => {	
let channel =     client.channels.get("530736619712544789")	
setInterval(function() {	
channel.send(`سباااامررر`);	
}, 30)	
})	

client.login(process.env.BOT_TOKEN);