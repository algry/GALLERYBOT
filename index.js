const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client();
const imgs = require("./allImages.json");


var session = {
	active: false
};

client.login(config.token);

client.on('ready', () => {
	console.log('I am ready!');
	client.channels.findAll("name", "general").forEach(channel => {
		channel.send("Start Successful");
	});
});

client.on('message', message => {
	var args = message.content.split("~");

	if (message.author.bot) return;
	fs.readFile('allImages.json', (err, data) => {
		images = JSON.parse(data);
		if (message.channel.type === 'dm') {
			console.log(message.content);
			switch (args[0]) {
				case ">view":
					switch (args[1]) {
						case undefined:
							console.log(Math.floor(Math.random() * images.length), images);
							message.channel.send(images[Math.floor(Math.random() * images.length)].URL);
							break;
					}
					break;
			}
		} else {
			switch (args[0]) {
				case ">pic":
					pictureSave(message, args, images);
					break;
			}
		}
	});
	
});

function pictureSave(message, args, images) {
	switch (args[1]) {
		case "add":
			var imgtitle = args[2];
			var imgurl = args[3];
			var images;
			
			images.push({
				rating: 0,
				title: imgtitle,
				URL: imgurl, server: 1
			});
			fs.writeFile('allImages.json', JSON.stringify(images), err => {
				if (err) throw err;
			});
			message.channel.send("Image " + args[2] + " saved!");
			break;
	}
}

