const tmi = require("tmi.js");
const config = require("../../config.js");
const { handleCommand } = require("./commands");

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: config.USERNAME,
        password: config.OAUTH,
    },
    channels: [config.CHANNEL],
    clientId: config.CLIENT_ID,
});

client.connect().catch((error) => {
    console.log(client);
    console.error("Twitch bot login failed:", error);
});

client.on("message", async (channel, tags, message, self) => {
    if (self || !message.startsWith("!")) return;

    const args = message.slice(1).split(" ");
    const command = args.shift().toLowerCase();

    await handleCommand(client, channel, tags, message);
});

module.exports = client;
