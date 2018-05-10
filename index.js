const discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client();

var currentID = 1;
var idName = "imgID-" + currentID;

var session = {
	active: false
};

client.login(config.token);

client.on('ready', () => {
  console.log('I am ready!');
  client.channels.findAll("name", "general").forEach(channel=>{
	  channel.send("Start Successful");
  });
});

client.on('message', () => {
	var args = message.content.splice("~");
	
	if (message.channel.type === 'dm') {
		
	} else {
		switch(args[0]) {
			case ">pic":
				pictureSave();
				break;
		}
	}
});

pictureSave = () => {
	switch(args[1]) {
		case "add":
			fs.writeFile(idName, '{"ID": ' + currentID + ',"rating": 0, "title": "' + args[3] + '", "URL":' + args[2] + '}', "utf8", (err) => {
				if (err) {
					throw err;
				}
				currentID++;
				idName = "imgID-" + currentID;
				})
			break;
	}
};

