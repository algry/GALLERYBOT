const discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const client = new discord.Client();
const maxPost = require("./maxPost.json");
const imgs = require("./allImages.json");

var currentID = maxPost.maxPostNum;
var idName = "imgID-" + currentID;

function writeMax() {
	fs.writeFile("MaxPost.json", '{"maxPostNum": ' + currentID + '}', "utf8", (err)=>{
		if (err) {
			throw err;
		}
		currentID++;
		idName = "imgID-" + currentID;
	});
}

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

client.on('message', message => {
	var args = message.content.split("~");
	
	if(message.author.bot) return;
	if (message.channel.type === 'dm') {
		console.log(message.contents);
		switch(args[0]) {
			case ">view":
				switch(args[1]) {
					case "":
						channel.send("");
					break;
				}
			break;
		}
	} else {
		switch(args[0]) {
			case ">pic":
				switch(args[1]) {
					case "add":
					var imgtitle = args[2];
					var imgurl = args[3];
					var retrievedImage;
						fs.readFile('allImages.json', (err, data) => {
							retrievedImage = JSON.parse(data);
							retrievedImage[idName] = '{"ID": ' + currentID + ',"rating": 0, "title": "' + imgtitle + '", "URL": "' + imgurl + '", "server": 1}';
							fs.writeFile(name, JSON.stringify(images), err => {
								throw err;
							});
						);
						currentID++;
						idName = "imgID-" + currentID;
						writeMax();
						channel.send("Image " + args[2] + " saved!");
						});
					break
				}
			break;
		}
	}
});

