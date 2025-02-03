import tmi from "tmi.js";
import { USERNAME, OAUTH, CHANNEL, CLIENT_ID } from "../../config.js";
import { handleCommand } from "./commands.js";

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: USERNAME,
        password: OAUTH,
    },
    channels: [CHANNEL],
    clientId: CLIENT_ID,
});

client.connect().catch((error) => {
    console.error(error);
});

client.on("message", async (channel, tags, message, self) => {
    if (self || !message.startsWith("!")) return;

    await handleCommand(client, channel, tags, message);
});

export default client;
