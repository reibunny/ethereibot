const tmi = require("tmi.js");
const config = require("../../config.js");

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

client.on("message", async (channel, tags, message, self) => {
    if (self || !message.startsWith("!")) return;

    const args = message.slice(1).split(" ");
    const command = args.shift().toLowerCase();

    await handleCommand(client, channel, tags, message);

    if (command === "echo") {
        client.say(channel, `${tags.username}, you said: "${args.join(" ")}"`);
    }
});

module.exports = client;
