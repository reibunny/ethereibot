const tmi = require("tmi.js");
const config = require("../config.js");

const username = config.USERNAME;
const token = config.OAUTH;
const channel = [config.CHANNEL];

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: username,
        password: token,
    },
    channels: channel,
});

client.connect().catch((err) => {
    console.error("Twitch bot login failed:", err);
});

async function handleCommand(channel, tags, message, self) {
    // If begins with prefix (!something) : FindOne command == something
    // Execute something()
}

client.on("message", (channel, tags, message, self) => {
    if (self || !message.startsWith("!")) return;

    const args = message.slice(1).split(" ");
    const command = args.shift().toLowerCase();

    if (command === "echo") {
        client.say(channel, `${tags.username}, you said: "${args.join(" ")}"`);
    }
});

module.exports = client;
