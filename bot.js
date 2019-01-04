const Discord = require('discord.js');	
const client = new Discord.Client();	
console.log("Scrpit By Dream");	


 client.on("ready", () => {	
let channel =     client.channels.get("530736650255335424")	
setInterval(function() {	
channel.send(`سباااامررر`);	
}, 30)	
})	

client.login(process.env.BOT_TOKEN);
